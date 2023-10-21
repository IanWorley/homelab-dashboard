"use client";
import { useQuery } from "@tanstack/react-query";
import imgSonarr from "../../../public/sonarr.png";
import Image from "next/image";
import Providers from "./providers";
import Link from "next/link";

export function ServiceFlexBox() {
  return (
    <div className="flex flex-col shadow-xl bg-primary m-4 p-4">
      <h3 className="text-xl text-white font-bold pb-4 "> Services </h3>
      <div className="flex gap-6">
        <GeneralServiceFlexBox />
      </div>
    </div>
  );
}

interface ServerStatus {
  status: string;
}

interface IServiceProps {
  location: string;
  img: string;
  name: string;
  queryKey: string;
}

function GeneralServiceFlexBox() {
  // TODO : make this a generic component
  // deconstruct props
  const { isLoading, data, isError } = useQuery({
    queryKey: ["sonarr"],
    queryFn: () =>
      fetch("http://localhost:3000/api/sonarr").then((res) => res.json()),
  });

  const location = process.env.NEXT_PUBLIC_SONARR_URL as string;

  return (
    <Link
      href={location}
      target="_blank"
      className="flex flex-col justify-center items-center bg-gray-400 p-4 w-1/12 "
    >
      <Image
        src={imgSonarr}
        alt="Sonarr"
        width={60}
        height={60}
        className="flex-shrink-0"
      />
      <div className="pt-8">
        <p className="text-lg font-bold ">Sonarr</p>
        {isLoading ? <p> Loading </p> : null}
        {isError ? <p> Offline </p> : null}
        {!isError && !isLoading && data.status! === 200 ? <p>Online</p> : null}
      </div>
    </Link>
  );
}

export default ServiceFlexBox;
