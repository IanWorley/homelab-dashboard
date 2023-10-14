import { Episode } from "@/types/media";
import redis from "@/libs/redis";
import axios from "axios";
import fetchSonarr from "@/libs/fetch-sonarr";

export async function GET(request: Request) {
  const today = new Date();
  const startOfLastMonth = new Date(today.getFullYear(), today.getDay() - 5, 1);
  const start = startOfLastMonth.toISOString();
  const end = today.toISOString();

  await redis.set("hello", "world");

  const calURLSafe = encodeURIComponent(
    `${
      "?start=" +
      start +
      "&unmonitored=false&includeSeries=false&includeEpisodeFile=true&includeEpisodeImages=false"
    }`
  );

  try {


const response  = await fetchSonarr('GET', '/api/v3/calendar' + calURLSafe , {});

   
    const result = response.data.slice(0, 5).map(async (item: Episode) => {
      if (item.hasFile == false) return null;
      return {
        id: item.id,
        title: item.title,
        filesize: item.episodeFile.size,
        date: item.episodeFile.dateAdded,
      };
    });

    const filtered = result.filter((item: any) => item != null);
    // make it expire after 1 hour
    await redis.set(
      "sonarr:recentdownloads",
      JSON.stringify(filtered),
      "EX",
      3600
    );

    return new Response(JSON.stringify(filtered), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    const cached = await redis.get("sonarr:recentdownloads");
    console.log("error fetching from sonarr");
    if (cached == null)
      return new Response(
        JSON.stringify({
          error: "Could not fetch data from Sonarr",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    return new Response(cached, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
