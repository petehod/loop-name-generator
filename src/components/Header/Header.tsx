"use client";
import { memo } from "react";
import Nav from "./Nav";
export const Header = memo(() => {
  return (
    <header
      className={`w-full text-center flex justify-center items-center bg-transparent mb-2  text-white`}
    >
      {/* <h1 className="text-3 font-semibold  mb-2">Loop Name Generator</h1> */}
      <Nav />
    </header>
  );
});
