import React from "react";
import Image from "next/image";
import HeroImage1 from "@/app/assets/media/cooptech-demo-01.png";

export default function HeroSection (){
    return (
        <div className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 gap-12">
                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-black mb-6">
                        Take your <br />
                        <span className="text-black">Cooperative Society</span> <br />
                        <span className="text-black">Online.</span>
                    </h1>

                    <p className="text-gray-600 max-w-xl mb-8 text-lg">
                        Manage membership, loans, savings, blog, email & mobile notifications,
                        payments and investment products in one dashboard.
                    </p>

                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg">
                        Contact Us
                    </button>
                </div>

                {/* Hero Image */}
                <div className="w-full max-w-xl">
                    <Image
                        src={HeroImage1}
                        alt="Demo of CoopTech"
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    );
    
}