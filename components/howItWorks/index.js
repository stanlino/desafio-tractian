/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Card from "./card";
import HowItWorksData from "./howItWorksData.json";

export default function HowItWorks() {
  const [categoryReference, setCategoryReference] = useState(true);

  return (
    <div className="m-auto max-w-6xl flex flex-col items-center">
      <h1 className="text-3xl leading-9 text-blue-900 sm:text-4xl tracking-wide mb-6 lg:mb-10">
        Como funciona?
      </h1>
      <h1 className="mb-4 text-lg text-center">Combine monitoramento e gestão, escolha:</h1>
      <div className="flex w-full px-2">
        <button
          className={`${
            categoryReference ? "selectedOptionBlue" : "notSelectedOption"
          } rounded-l-lg`}
          onClick={() => setCategoryReference(!categoryReference)}
        >
          <h3 className="text-xs sm:text-sm md:text-lg px-2 font-semibold text-center">
            Monitoramento Online
          </h3>
        </button>
        <button
          className={`${
            categoryReference ? "notSelectedOption" : "selectedOptionGray"
          } rounded-r-lg`}
          onClick={() => setCategoryReference(!categoryReference)}
        >
          <h3 className="text-sm md:text-lg px-2 font-semibold text-center">
            Gestão de Ativos
          </h3>
        </button>
      </div>
      <div
        className={`w-full ${
          categoryReference ? "flex" : "hidden"
        } flex-wrap justify-center lg:justify-between relative`}
      >
        {HowItWorksData["01"].map((item, index) => {
          return (
            <Card
              key={index}
              imageSrc={item.imgSrc}
              imageAlt={item.imgAlt}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
      <div
        className={`w-full ${
          categoryReference ? "hidden" : "flex"
        } flex-wrap justify-center lg:justify-between relative`}
      >
        {HowItWorksData["02"].map((item, index) => {
          return (
            <Card
              key={index}
              imageSrc={item.imgSrc}
              imageAlt={item.imgAlt}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
