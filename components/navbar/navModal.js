import Image from "next/image";
import React from "react";
import GreenButton from "../greenButton";
import ArrowIcon from "./arrowIcon";
import Button from "./button";
import CloseMenuButton from "./closeMenuButton";

export default function NavModal({ isOpen, closeModalFunction }) {
  if (isOpen) {
    return (
      <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex flex-col bg-white w-full h-full">
          <div className="bg-slate-200 h-20 flex justify-between px-5">
            <div className="flex w-36 h-full relative">
              <Image
                src={"/svg/logotractianazul.svg"}
                layout={"fill"}
                objectFit={"contain"}
                alt={"Logo da Tractian"}
              />
            </div>
            <CloseMenuButton onClickFunction={closeModalFunction} />
          </div>
          <div className="flex flex-col h-2/3 justify-between p-5">
            <Button textColor="black">
              <span>Soluções</span>
              <ArrowIcon />
            </Button>
            <Button textColor="black">
              <span>Sobre Nós</span>
              <ArrowIcon />
            </Button>
            <Button textColor="black">
              <span>Materiais Gratuitos</span>
              <ArrowIcon />
            </Button>
            <Button textColor="black">
              <span>Blog</span>
            </Button>
            <Button textColor="black">
              <span>Área do cliente</span>
            </Button>
            <GreenButton text={'Demonstração'} />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
