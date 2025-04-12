import React from "react";
import NavBar from "./components/Navbar";
import FeaturesSection from "./components/Features";
import TestimonialSection from "./components/Testimonials";
import PrincipleSection from "./components/Principles";
import FooterSection from "./components/Footer";
import HeroSection from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-white flex flex-col items-center justify-between px-4 pt-6 relative overflow-hidden">
      <NavBar />

      <HeroSection />

      <FeaturesSection />

      <TestimonialSection />

      <PrincipleSection />

      <FooterSection />
    </main>
  );
}
