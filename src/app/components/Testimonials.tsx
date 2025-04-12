import React from "react";
import RAPPORTLOGO from "@/app/assets/media/bw-rppt-logo.jpg";
import BAMCMSLOGO from "@/app/assets/media/berakah-logo-retouch.png";
import Image from "next/image";

const testimonials = [
    {
        testimony: "CoopTech transformed the way we manage our operations. From savings to member communication, it's all seamless now.",
        image: RAPPORTLOGO,
        name: "Rapport Cooperative",
        location: "Lagos, Nigeria",
    },
    {
        testimony: "BAMCMS now runs like a modern bank. The automation and real-time  are exactly what we needed.",
        image: BAMCMSLOGO,
        name: "BAMCMS",
        location: "Lagos, Nigeria",
    },
]

export default function TestimonialSection (){
    return (
        <section className="w-full max-w-6xl mt-15 mb-20 text-center px-4">
            <h2 className="text-4xl font-bold text-black mb-4">
                Our Clients Love Us!
            </h2>
            <p className="text-gray-500 text-lg mb-12">
                Hear how CoopTech is changing how Cooperatives operate in 2025.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Testimonial 1 */}
                {testimonials.map(({ testimony, name, location, image }, index) => (
                <div className="bg-gray-100 p-8 rounded-2xl flex flex-col items-center text-left" key={index}>
                    <p className="text-lg text-gray-700 italic mb-6">
                        {testimony}
                    </p>
                    <div className="flex items-center space-x-4">
                        {/* Placeholder logo */}
                        <Image src={image} alt="Partner Company" className="w-12 h-12 bg-black rounded-full" />
                        <div>
                            <p className="font-bold text-black">{name}</p>
                            <p className="text-gray-500 text-sm">{location}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}