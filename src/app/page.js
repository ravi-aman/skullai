"use client"
import { UserButton } from "@clerk/nextjs";
import ButtonGradient from "../../public/assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <>
      <BrowserRouter>

        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Hero />
          <Benefits />
          <Collaboration />

        </div>
      </BrowserRouter>
    </>
  );
}
