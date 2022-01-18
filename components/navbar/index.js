import Image from "next/image";
import React, { useState, useEffect } from "react";
import Button from "./button";
import SanduichMenuButton from "./sanduichMenuButton";
import ArrowIcon from "./arrowIcon";
import GreenButton from "../greenButton";
import NavModal from "./navModal";

export default function NavBar() {
  const [navModalIsOpen, setNavModalIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 1 && !scrollY) {
        setScrollY(true);
      }
      if (window.scrollY == 0) {
        setScrollY(false);
      }
    };
  }, [scrollY]);

  if (navModalIsOpen) {
    return (
      <NavModal
        isOpen={navModalIsOpen}
        closeModalFunction={() => setNavModalIsOpen(false)}
      />
    );
  }

  return (
    <div
      className={`${
        scrollY ? "bg-blue-900" : null
      } h-24 w-full md:20 flex justify-between items-center px-8 fixed z-50`}
    >
      <div className="flex w-40 md:w-48 mr-10 h-20 relative">
        <Image
          src={"/svg/logotractianbranca.svg"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"Logo da Tractian"}
        />
      </div>
      <nav className="w-full hidden lg:flex justify-between items-center">
        <div className="flex items-center">
          <Button>
            <span>Soluções</span>
            <ArrowIcon />
          </Button>
          <Button>
            <span>Sobre Nós</span>
            <ArrowIcon />
          </Button>
          <Button>
            <span>Materiais Gratuitos</span>
            <ArrowIcon />
          </Button>
          <Button>
            <span>Blog</span>
          </Button>
        </div>
        <div className="flex">
          <Button>
            <span>Área do cliente</span>
          </Button>
          <GreenButton text={'Demonstração'} />
        </div>
      </nav>
      <SanduichMenuButton onClickFunction={() => setNavModalIsOpen(true)} />
    </div>
  );
}
