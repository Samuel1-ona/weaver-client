"use client";

import { HiSun } from "react-icons/hi";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className={`flex justify-end items-end ${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
        >
            <button
                onClick={toggleTheme}
                className=" p-2 m-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
                <HiSun
                    className={`text-2xl ${
                        theme === "dark" ? "text-yellow-400" : "text-gray-300"
                    }`}
                />
            </button>
        </div>
    );
}
