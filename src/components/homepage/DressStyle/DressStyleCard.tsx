import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type DressStyleCardProps = {
  title: string;
  url: string;
  className?: string;
};

const DressStyleCard = ({ title, url, className }: DressStyleCardProps) => {
  return (
    <Link
      href={url}
      className={cn([
        "w-full rounded-[20px] bg-white bg-top px-6 py-4 text-left text-2xl font-bold transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 md:h-full md:px-9 md:py-[25px] md:text-4xl",
        className,
      ])}
    >
      {title}
    </Link>
  );
};

export default DressStyleCard;
