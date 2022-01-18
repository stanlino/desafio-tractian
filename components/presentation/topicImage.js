import React from "react";
import presentationData from "./presentationData.json";
import Image from "next/image";

export default function TopicImage({ topicFocused, index }) {
  return (
    <div
      className={`h-72 w-full relative ${
        topicFocused === index ? "block" : "hidden"
      }`}
    >
      <Image
        src={presentationData[index].imageUrl}
        alt={presentationData[index].imageAlt}
        layout={"fill"}
        objectFit={"contain"}
      />
    </div>
  );
}
