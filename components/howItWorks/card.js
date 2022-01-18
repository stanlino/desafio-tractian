/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export default function Card({ imageSrc, imageAlt, title, description }) {
  return (
    <div className="relative group lg:py-2 py-5">
      <div className="w-80 h-52 transition duration-500 relative bg-white lg:shadow-2xl group-hover:shadow-none flex justify-center items-center z-10 lg:translate-y-1/2 group-hover:translate-y-0">
        <div>
          <Image src={imageSrc} alt={imageAlt} objectFit="contain" layout="fill" />
        </div>
      </div>
      <div className="w-80 h-auto transition duration-500 relative flex justify-center items-center p-5 box-border lg:-translate-y-1/2 group-hover:-translate-y-0">
        <div>
          <h3 className="font-semibold py-2">{title}</h3>
          <p className="group-hover:text-black lg:text-white ">{description}</p>
        </div>
      </div>
    </div>
  );
}
