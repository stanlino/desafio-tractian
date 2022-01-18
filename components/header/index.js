/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import GreenButton from "../greenButton";

export default function Header() {
  return (
    <header className="w-full flex-col bg-gradient-to-l from-blue-600 to-blue-900">
      <div className="container mx-auto">
        <div className="relative flex flex-col lg:flex-row justify-between">
          <div className="container max-w-prose px-6 py-6 z-30 pt-36">
            <h1 className="text-white lg:text-4xl text-xl font-semibold">
              Monitoramento Online e Gestão de Ativos em um só lugar
            </h1>
            <h4 className="text-white font-light sm:text-lg my-6 pr-2">
              Evite falhas nas suas máquinas e torne o tempo de inatividade uma
              coisa do passado com sistema preditivo da TRACTIAN.
            </h4>
            <div className="flex my-6 pr-2">
              <img alt={'Avaliação'} src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-rating-feedback-those-icons-lineal-color-those-icons-5.png"/>
              <a href="#avaliações" className="text-yellow-200 hover:underline cursor-pointer font-light sm:text-lg px-1">Veja o que nossos clientes dizem!</a>
            </div>
            <GreenButton text={'Demonstração'} />
            <div className="text-white flex font-light mt-4">
              <h5>Já é cliente?</h5>
              <a href="login" className="mx-1 font-semibold">
                Acesse aqui.
              </a>
            </div>
          </div>
          <div className="w-full h-1/2 lg:w-1/2 lg:absolute right-0">
            <Player
              src={"/animation.json"}
              autoplay
              loop
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </div>
      </div>
      <img
        src="/svg/ondas.svg"
        alt="ondas"
        className="relative -bottom-1"
        height="180"
      />
    </header>
  );
}
