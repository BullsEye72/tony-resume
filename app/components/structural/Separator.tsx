import { chakraPetch } from "@/app/fonts";
import Objective from "../Header/Objective";
import React from "react";

export default function Separator() {
  const commonStyle = "pl-8 w-full h-16 items-center pl-2 " + chakraPetch.className;

  return (
    <>
      <div className={`${commonStyle} lgc-blue-bg text-3xl uppercase`}>Developpeur Fullstack</div>
      <div className={`${commonStyle} lgc-green-bg`}>
        <Objective />
      </div>
    </>
  );
}
