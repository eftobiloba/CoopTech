import React from "react";
import { Banknote, Megaphone, Cake } from "lucide-react";

export default function PrincipleSection (){
    return (
        <div className="flex flex-col items-center text-center mt-20 mb-20">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-black mb-6">
                Focus Only On<br />
                <span className="text-black">What Matters</span>
            </h1>

            <p className="text-gray-500 max-w-xl mb-8 text-lg">
                Automated birthday messages, savings and repayments reminders, blog and announcements, member wallet, and more
                handled by CoopTech.
            </p>

            <a href="mailto:faseyitantobiloba@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg">
                Contact Us
            </a>
        </div>
    );
}