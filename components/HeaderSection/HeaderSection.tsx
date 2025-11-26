import Image from "next/image";
import React from "react";
import Hero from "@/public/images/hero.jpg";

const HeaderSection = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <header className="relative h-60 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={Hero}
          className="object-cover object-center w-full h-full"
          alt="hero image"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14">
        <h1 className="text-5xl font-bold leading-tight capitalize">
          {subTitle}
        </h1>
        <p className="text-xl text-gray-300">{subTitle}</p>
      </div>
    </header>
  );
};

export default HeaderSection;
