"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";
const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      className="w-max h-[24px] flex justify-between items-center border-2 border-solid border-orange-600 rounded-3xl relative cursor-pointer"
      onClick={toggle}
    >
      <div className="text-[12px] p-1">
        <BsSun />
      </div>
      <div className="text-[12px] p-1">
        <BsMoon />
      </div>
      <div
        className="w-[20px] h-full bg-green-700 absolute"
        style={
          mode === "light"
            ? {
                right: "0px",
                borderTopRightRadius: "1.5rem",
                borderBottomRightRadius: "1.5rem",
              }
            : {
                left: "0px",
                borderTopLeftRadius: "1.5rem",
                borderBottomLeftRadius: "1.5rem",
              }
        }
      ></div>
    </div>
  );
};

export default DarkModeToggle;
