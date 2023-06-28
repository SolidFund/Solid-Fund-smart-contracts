"use client";
import { useState } from "react";
import menu from "@public/assets/menu.svg";
import Image from "next/image";
import Web3Button from "../Web3Button";
import { NavigateLinksMovile } from "..";

const CustomButtomMovil = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <>
      <div className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
        <Image src={menu} alt="menu" width={30} height={30} />
        {showMenu && (
          <div>
            <ul
              className={`absolute top-[70px] right-0 left-0 bg-[#e5e5ee]  shadow-secondary py-4 cursor-pointer z-20 ${
                !showMenu ? "-translate-y-[100vh]" : "translate-y-0"
              } transition-all duration-700`}
            >
              <NavigateLinksMovile />
              <div className="flex justify-center">
              <Web3Button btnTitle="Connect Wallet" />
              </div>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomButtomMovil;
