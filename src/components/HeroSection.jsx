import React from "react";
import heroLogo from "../assets/images/logo.svg";
import "../scripts/main.js";

const HeroSection = () => {
  //Hero Section
  return (
    <section id="hero">
      {/* Hero Container */}
      <div className="container max-w-6xl mx-auto px-6 py-12">
        {/* Menu/Logo Container */}
        <nav className="flex items-center justify-between font-bold text-white">
          {/* Logo */}
          <img src={heroLogo} alt="hero-logo" />
          {/* Menu */}
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <div className="group inline-block">
              <a href="#" className="relative">
                About
                <span className="absolute left-0 -bottom-1.5 block h-0.5 w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="group inline-block">
              <a href="#" className="relative">
                Careers
                <span className="absolute left-0 -bottom-1.5 block h-0.5 w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="group inline-block">
              <a href="#" className="relative">
                Events
                <span className="absolute left-0 -bottom-1.5 block h-0.5 w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="group inline-block">
              <a href="#" className="relative">
                Products
                <span className="absolute left-0 -bottom-1.5 block h-0.5 w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="group inline-block">
              <a href="#" className="relative">
                Support
                <span className="absolute left-0 -bottom-1.5 block h-0.5 w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
          {/* @todo Hamburger Menu */}
          <div class="md:hidden">
            <button
              id="menu-btn"
              type="button"
              class="z-40 block hamburger md:hidden focus:outline-none"
            >
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>
            </button>
          </div>
        </nav>

        <div
          id="menu"
          class="absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
        >
          <a href="#" class="hover:text-pink-500">
            About
          </a>
          <a href="#" class="hover:text-pink-500">
            Careers
          </a>
          <a href="#" class="hover:text-pink-500">
            Events
          </a>
          <a href="#" class="hover:text-pink-500">
            Products
          </a>
          <a href="#" class="hover:text-pink-500">
            Support
          </a>
        </div>

        <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
