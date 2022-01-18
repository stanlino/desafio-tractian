import React, { useState } from "react";
import GreenButton from "../greenButton";
import presentationData from "./presentationData.json";
import Topic from "./topic";
import TopicImage from "./topicImage";

export default function Presentation() {
  const [topicFocused, setTopicFocused] = useState("01");

  return (
    <section className="pt-12 px-4 lg:pb-12 lg:pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-start container mx-auto max-w-7xl">
        <div className="flex flex-col max-w-md">
          <h3 className="text-blue-600 text-lg font-semibold uppercase mb-4">
            Manutenção predintiva descomplicada
          </h3>
          <h2 className="text-3xl sm:text-4xl sm:leading-tight mb-6 lg:mb-12 leading-9 tracking-wide">
            Mantenha a sua equipe e seus ativos com o
            <strong> melhor desempenho</strong>
          </h2>
          <Topic
            topicFocused={topicFocused}
            setTopicFocused={setTopicFocused}
          />
          <div className="hidden py-8 w-full lg:flex justify-start">
            <GreenButton text={"Fale com um especialista"} />
          </div>
        </div>
        <div className="flex flex-col h-full">
          <div className="inline-block max-h-full overflow-hidden relative">
            <TopicImage topicFocused={topicFocused} index={"01"} />
            <TopicImage topicFocused={topicFocused} index={"02"} />
            <TopicImage topicFocused={topicFocused} index={"03"} />
          </div>
          <h4 className="text-2xl font-semibold my-4">
            {presentationData[topicFocused].subtitle}
          </h4>
          <p className="max-w-xl">
            {presentationData[topicFocused].description}
          </p>
        </div>
        <div className="lg:hidden py-8 w-full flex justify-center">
          <GreenButton text={"Fale com um especialista"} />
        </div>
      </div>
    </section>
  );
}
