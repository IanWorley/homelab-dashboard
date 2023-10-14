"use client";

import { mediaResult } from "@/types/media";
import { useQuery } from "@tanstack/react-query";

export const NewRelease = () => {
 
  return (
    <div className="bg-primary ">
      <div className="flex flex-row p-10   justify-between items-center">
        <p className="text-lg font-bold text-white">File Name</p>
        <p className="text-lg font-bold text-white">Type</p>
        <p className="text-lg font-bold text-white">Size</p>
        <p className="text-lg font-bold text-white">Date</p>
        <p className="text-lg font-bold text-white"> Service </p>
      </div>
      <NewReleaseRows />
    </div>
  );
};

export const NewReleaseRows = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["newreleases"],
    queryFn: () =>
      fetch("http://localhost:3000/api/sonarr/RecentDownloads").then(
        (res) => res.json() as Promise<mediaResult[]>
      ),
  });

  if (isError) {
    return <p> Error </p>;
  }

  if (isLoading) {
    return <p> Loading </p>;
  }

  console.log(data);

  return (
    <div>
      {data.map((media: mediaResult) => {
        return (
           <div key={media.id} className="flex  flex-row  p-10   justify-between items-center">
            <p className="text-white  "> {media.path } </p>
            <p className="text-white"> {media.filesize} </p>
            <p className="text-white"> {media.date} </p>
          </div>
        );
      })}
    </div>
  );
};

export default NewRelease;
