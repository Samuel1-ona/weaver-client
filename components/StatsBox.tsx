"use client";

import { useTheme } from "@/components/ThemeContext";
import Image from "next/image";

export default function StatsBox() {
    const { theme } = useTheme();
    const rank = 30;
    const totalRank = 50;

    const percentage = ((rank / totalRank) * 100) / 1;

    return (
        <div
            className={`border-2 border-border w-full h-auto my-4 rounded-t-[10px] rounded-b-none px-10 py-5 max-h-[285.38px] flex flex-col items-center justify-center bg-background text-foreground`}
        >
            <div className="flex flex-col items-center justify-center w-4/5 gap-2">
                <span className="flex flex-row justify-center items-end gap-7">
                    <h1 className="text-7xl font-medium">259</h1>
                    <Image
                        src="/tangler-badge.svg"
                        alt="badge"
                        width={100}
                        height={100}
                        className="w-[60.9px] h-[67.62px] object-contain"
                    />
                </span>

                <div className="border-t border-border w-full flex justify-between items-center py-2 px-4 text-xs text-muted-foreground font-medium">
                    <p>
                        <span className="text-secondary mr-1 font-light">
                            Balance:
                        </span>{" "}
                        $200.10 USDT
                    </p>

                    <p>
                        <span className="text-secondary font-light mr-3">
                            Rank: {" "}
                        </span>
                        <span className="text-secondary font-light">
                            {rank}/
                        </span>
                        {totalRank}
                    </p>
                </div>
            </div>

            <div
                className={`metre w-full h-[120px] mt-8 flex flex-col bg-muted`}
            >
                <div className="metre-bar w-full relative bg-background h-[13.09px] overflow-hidden">
                    <span
                        className="absolute top-0 left-0 bg-[#C4FF63] h-full"
                        style={{
                            width: `${percentage}%`,
                        }}
                    ></span>
                </div>

                <div
                    className={`NFT w-full h-full flex flex-row justify-between bg-background`}
                >
                    <div className="text flex flex-col justify-center px-5 text-xs border-l border-border ml-10">
                        <h2 className="font-medium">To mint Tarauntula</h2>
                        <h3 className="text-muted-foreground">
                            Complete challenge to mint Tarauntula
                        </h3>
                    </div>

                    <div className="h-full bg-background flex items-center justify-center w-[101.93px]">
                        <Image
                            src="/TanglerNFT.svg"
                            alt="tangler"
                            width={100}
                            height={100}
                            className="w-[54.21px] h-[57.93px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
