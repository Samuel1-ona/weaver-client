"use client";

import { FaTelegramPlane, FaChevronDown } from "@/utils/icons";
import React, { useState } from "react";
import { useTheme } from "@/components/ThemeContext";


interface TaskBoxProps {
  taskName: string;
  icon: React.ReactNode;
  backgroundColor: string;
}

export default function TaskBox({
  icon,
  taskName,
  backgroundColor,
}: TaskBoxProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isComplete, setIsComplete] = useState(true);
  const { theme } = useTheme();

  const fullText =
    "StarkPoint will measure its success based on the growth in user interactions over time";

  const displayedText = isExpanded
    ? fullText
    : `${fullText.split(" ").slice(0, 6).join(" ")}...`;

  return (
    <div className= {`border-2 border-[#1D1D1D] w-full h-auto rounded-t-[10px] rounded-b-none px-10 py-5
      ${ theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
    }`} >
      <div className="flex space-x-5">
        <div
          className={`${backgroundColor} w-fit h-fit p-2 rounded-full flex items-center justify-center`}
        >
          {icon}
        </div>

        <div
          className={`flex flex-col items-center ${
            isExpanded ? "border-l border-gray-700" : ""
          } w-full`}
        >
          <div
            className="flex justify-between items-center w-full pl-3 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <h2 className="text-base" >Connect {taskName}</h2>
            <FaChevronDown
              className={` transform transition-all duration-300  ${
                isExpanded ? "rotate-[180deg]" : "rotate-[0] "
              } `}
            />
          </div>
          <p className="font-thin text-secondary pl-3 w-full text-sm lg:text-base" >
            {displayedText}
          </p>

          {isExpanded && (
            <div className="w-full mt-3 space-y-2 border-t border-gray-700 pt-2">
              <div className="flex justify-between items-center pl-3">
                <p className="space-x-2 text-sm lg:text-base">
                  <span className="font-thin text-secondary">Category:</span>
                  <span>Socials</span>
                </p>
                <p className="space-x-2 text-sm lg:text-base">
                  <span className="font-thin text-secondary">Points:</span>
                  <span>40</span>
                </p>
              </div>
              <p className="space-x-2 pl-3 text-sm lg:text-base">
                <span className="font-thin text-secondary">Status:</span>
                <span>{isComplete? " Done" : "pending"} </span>
              </p>
            </div>
          )}
        </div>
      </div>
      {isExpanded && (
        <button
          className={`text-sm lg:text-base py-3 lg:py-5 w-full bg-[#EDFFD0] text-[#000000]  font-medium rounded-lg transform transition duration-300 hover:scale-[1.02] mt-5`}
        >
          Connect {taskName}
        </button>
      )}
    </div>
  );
}
