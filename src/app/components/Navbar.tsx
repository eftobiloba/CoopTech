import React from "react";
import COOPTECHLOGO from "../assets/media/cooptech.svg";
import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="w-full max-w-7xl flex justify-between items-center space-x-4">
            <button className="px-5 py-2 rounded-full border border-black text-black font-medium">
                Login
            </button>
            <Image src={COOPTECHLOGO} alt="Coop tech logo" width={50} />
            <button className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold">
                Sign up
            </button>
        </nav>
    );
}