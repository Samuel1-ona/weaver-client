"use client";

import Image from "next/image";
import { useState } from "react";

export default function MintAndProcessPage() {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [identityVerified, setIdentityVerified] = useState(false);

    const handleTermsAcceptance = () => {
        setTermsAccepted(!termsAccepted);
    };

    const handlePayment = () => {
        if (termsAccepted && identityVerified) {
            setPaymentProcessing(true);
            // Simulate payment processing
            setTimeout(() => {
                setPaymentProcessing(false);
                alert("Payment successful! NFT minted.");
            }, 3000);
        } else {
            alert("Please verify your identity and accept the terms.");
        }
    };

    return (
        <div className="font-satoshi min-w-[53.75vw] max-w-[1032px] min-h-[63.5vh] max-h-[700px] flex flex-col md:flex-row items-center justify-between px-12 md:border border-[#414141] dark:bg-[#0D0D0D] dark:text-white rounded-[20px]">
            <Image
                src="/RegisterUser.svg"
                alt="group-img-for-screen1"
                height={100}
                width={100}
                className="block w-[300px] md:w-[537px] md:h-[654px] object-contain md:self-end"
            />

            {/* Updated Text Container */}
            <div className="md:min-w-[200px] md:max-w-[335px] md:w-[17.43vw] min-h-[230px] flex flex-col justify-between items-center">
                {/* Header with added margin-bottom */}
                <p className="md:flex flex-col items-start justify-center mb-6">
                    <span className="font-satoshi font-light text-[27.13px] leading-[32.3px] tracking-[-0.04em] text-left">
                        NFT mint processing
                    </span>
                </p>

                <div className="md:w-full w-[80%] mx-auto">
                    <div className="text-left">
                        <div className="mt-4">
                            {/* Numbered Item 1 */}
                            <div className="flex items-center mb-2">
                                <span
                                    className="mr-2 border border-[#444444] w-6 h-6 flex items-center justify-center"
                                    style={{ color: "#444444" }}
                                >
                                    1
                                </span>
                                <span>
                                    Verify your Identity document
                                    <br />
                                    <p className="text-sm text-gray-500 font-satoshi font-light">
                                        Upload your official document
                                    </p>
                                </span>
                            </div>

                            {/* Numbered Item 2 */}
                            <div className="flex items-center">
                                <span
                                    className="mr-2 border border-[#444444] w-6 h-6 flex items-center justify-center"
                                    style={{ color: "#444444" }}
                                >
                                    2
                                </span>
                                <span>
                                    Mint your Weaver NFT
                                    <br />
                                    <p className="text-sm text-gray-500 font-satoshi font-light">
                                        Get a unique NFT that represents your
                                        identity
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 w-[424px] h-[42px] g-[2px]">
                        <p className="text-left text-sm font-satoshi font-light">
                            ID verification Fee: $0.00
                        </p>
                        <p className="text-left text-sm text-gray-500 font-satoshi font-light">
                            Age verification notice: You must be at least 18
                            years old.
                        </p>
                    </div>

                    {/* Checkbox 1 */}
                    <div className="mt-4">
                        <label className="flex text-xs text-gray-400 mb-3">
                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={handleTermsAcceptance}
                                className="w-5 h-5 mr-2 bg-[#444444]"
                            />
                            I have read the{" "}
                            <a href="#" className="text-blue-500 ml-1">
                                Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-blue-500">
                                Terms of Service
                            </a>
                            .
                        </label>
                    </div>
                    <div className="mt-4">
                        <label className="flex text-xs text-gray-400 mb-3">
                            <input
                                type="checkbox"
                                checked={identityVerified}
                                onChange={() =>
                                    setIdentityVerified(!identityVerified)
                                }
                                className="w-8 h-8 mr-2 bg-[#444444]"
                            />
                            Note: You need to be 18 and above. The verification
                            fee is not-refundable, if your ID is declined.
                        </label>
                    </div>

                    {/* Pay Button */}
                    <button
                        className="w-full bg-[#EDFFD0] py-3 text-center text-base font-[500] rounded-[8px] transform transition duration-300 hover:scale-[1.1] text-[#0D0D0D] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handlePayment}
                        disabled={
                            !termsAccepted ||
                            !identityVerified ||
                            paymentProcessing
                        }
                    >
                        {paymentProcessing ? "Processing..." : "Pay"}
                    </button>
                </div>
            </div>
        </div>
    );
}
