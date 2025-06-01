"use client";

import { IoMdClose } from "@/utils/icons";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface ConnectWalletModalProps {
    onCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConnectWalletModal({
    onCloseModal,
}: ConnectWalletModalProps) {
    const [collapsed, setCollapsed] = useState(true);
    const [sliceNumber, setSliceNumber] = useState(4); // Default to desktop view

    useEffect(() => {
        const handleResize = () => {
            setSliceNumber(window.innerWidth < 768 ? 3 : 4);
        };

        // Set initial value
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const fullText = [
        "I am not a person or company who is a resident of, or is located, incorporated or has a registered agent in, the United States or a restricted location.",
        "I will not in the future access this site or trade on Coiton while located in the United States or a restricted location.",
        "I am not using, and will not in the future use, a VPN to mask my physical location from a restricted location.",
        "I am lawfully permitted to access this site and trade on Coiton under the laws of jurisdiction in which I reside and am located.",
        "I understand DeFi is a new phenomenon, and understand and undertake any technological and market risks associated with it.",
    ];

    const collapsedText = fullText.slice(0, sliceNumber);

    return createPortal(
        <div
            className="bg-white fixed inset-0 flex justify-center items-center z-[100] font-satoshi dark:bg-[#0D0D0D] dark:text-white"
            onClick={() => onCloseModal(false)}
        >
            <div
                className="border border-[#414141]  rounded-[20px] px-5 py-5 space-y-3 w-[80vw] max-w-[493px] 2xl:w-2/5 "
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center">
                    <h2 className="font-medium  text-xl">
                        Wallet Verification
                    </h2>
                    <IoMdClose
                        size={30}
                        className="cursor-pointer "
                        onClick={() => onCloseModal(false)}
                    />
                </div>
                <div className="space-y-4">
                    <p className="font-thin  opacity-[90%]">
                        By verifying your wallet, you agree to our{" "}
                        <span className="underline">Terms of Service</span> and
                        <span className="underline"> Privacy Policy.</span>
                    </p>
                    <div className="space-y-2">
                        <div>
                            {(collapsed ? collapsedText : fullText).map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className="font-thin text-sm  mt-2"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                            <span>{collapsed && "..."}</span>
                        </div>
                        <span
                            className="cursor-pointer text-[#EDFFD0]"
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            {collapsed ? "See more" : "See less"}
                        </span>
                    </div>
                    <button className="w-full bg-[#EDFFD0] py-3 text-center text-base text-[#000000] font-[500] rounded-[8px] transform transition duration-300 hover:scale-[1.02]">
                        Accept & Verify Wallet
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}
