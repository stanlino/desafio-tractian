import Image from "next/image";
import React from "react";

export default function ReviewBox({
  img,
  altImg,
  nameClient,
  occupation,
  reviewText,
  float,
}) {
  return (
    <div className={`w-full flex ${float ? 'justify-start' : 'justify-end'} py-4`}>
      <div
        className={`bg-white lg:w-3/5 w-full h-full py-2 rounded-3xl ${float ? 'rounded-tl' : 'rounded-tr'} flex px-2`}
      >
        <div className="w-1/5 flex flex-col justify-center items-center">
          <Image src={img} alt={altImg} width={55} height={55} />
          <h1 className="font-semibold text-sm text-center">{nameClient}</h1>
          <p className="text-xs text-center sm:flex hidden">{occupation}</p>
        </div>
        <div className="w-4/5 flex justify-center items-center px-4">
          <p>{reviewText}</p>
        </div>
      </div>
    </div>
  );
}
