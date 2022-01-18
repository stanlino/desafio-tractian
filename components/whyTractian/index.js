import Image from "next/image";
import React from "react";
import Paragraph from "./paragraph";
import whyChooseTractianData from "./whyChooseTractianData.json";

export default function WhyTractian() {
  return (
    <div className="px-16 py-4 container max-w-5xl m-auto">
      <h1 className="lg:text-3xl text-2xl text-center text-blue-900">
        Por que escolher a <b>Tractian</b>?
      </h1>
      <h2 className="py-4 text-1xl text-center">
        Um serviço de monitoramento te permite ter mais controle sobre suas
        maquinas, evitando falhas inesperadas.
      </h2>
      <div className="h-80 w-full relative">
        <Image
          src={"/svg/undraw_growth_analytics.svg"}
          alt={"Ilustração de análize gráfica"}
          objectFit={"contain"}
          layout={"fill"}
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="text-left w-full lg:w-1/2">
          <Paragraph
            title={whyChooseTractianData[0].title}
            text={whyChooseTractianData[0].text}
          />
          <Paragraph
            title={whyChooseTractianData[1].title}
            text={whyChooseTractianData[1].text}
          />
        </div>
        <div className="text-left w-full lg:w-1/2">
          <Paragraph
            title={whyChooseTractianData[2].title}
            text={whyChooseTractianData[2].text}
          />
          <Paragraph
            title={whyChooseTractianData[3].title}
            text={whyChooseTractianData[3].text}
          />
        </div>
      </div>
    </div>
  );
}
