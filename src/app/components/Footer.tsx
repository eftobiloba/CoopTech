import React from "react";
import COOPTECHLOGO from "../assets/media/cooptech.svg";
import Image from "next/image";

export default function FooterSection () {
    return (
        <section className="w-full max-w-6xl mt-30 mb-20 px-4 flex items-center justify-center">
            <div className="flex flex-col items-center text-center space-y-2">
                <Image src={COOPTECHLOGO} alt="CoopTech logo" width={50} height={50} />
                <p className="text-gray-500 text-sm">Cooperative Technology</p>
                <p className="text-gray-500 text-sm">© 2025 CoopTech, all rights reserved.</p>
            </div>
        </section>
    );
}