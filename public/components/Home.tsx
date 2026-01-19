"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Raleway } from "next/font/google";
import ButtonDownload from "./ui/ButtonDownload";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    const sections = ["home", "about", "features", "faqs", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const getLinkClass = (sectionId: any) => {
    const baseClass = "transition-all duration-300 pb-1";
    return activeSection === sectionId
      ? `${baseClass} font-bold border-b-2 border-black`
      : `${baseClass} hover:font-bold`;
  };

  const getMobileLinkClass = (sectionId: any) => {
    const baseClass = "hover:text-gray-600 transition-all duration-300 w-fit";
    return activeSection === sectionId
      ? `${baseClass} font-bold border-b-2 border-black`
      : `${baseClass}`;
  };

  return (
    <div className="min-h-screen bg-[#00000006] overflow-x-hidden relative">
      <div className="flex flex-row justify-between">
        {/* Left Section */}
        <div className="w-full lg:w-[425px] pl-6 sm:pl-12 lg:pl-28 pt-6 pb-12 lg:pb-0 z-30 relative">
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
          <h1 className="text-[#2B2B2B] mt-16 lg:mt-28 font-bold text-[35px] leading-tight">
            SNEAKER <br />
            CLEANING APP
          </h1>
          <p
            className={`text-[#2B2B2B] text-[20px] mt-10 font-normal ${raleway.className} max-w-sm`}
          >
            We clean and restore your favorite sneakers using the safest and
            best practices in the industry.
          </p>
          <div className="mt-8">
            <ButtonDownload />
          </div>
        </div>

        {/* Right Section - Fixed Background */}
        <div className="relative w-full lg:w-[750px] min-h-[500px] lg:min-h-screen bg-[url('/assets/ziczac.png')] bg-no-repeat bg-contain lg:bg-cover bg-center lg:bg-left">
          {/* Desktop Navbar */}
          <nav className="hidden lg:flex absolute top-0 left-24 justify-start gap-12 p-8 text-[#000000] z-20">
            <Link href="#home" className={getLinkClass("home")}>
              Home
            </Link>
            <Link href="#about" className={getLinkClass("about")}>
              About
            </Link>
            <Link href="#features" className={getLinkClass("features")}>
              Features
            </Link>
            <Link href="#faqs" className={getLinkClass("faqs")}>
              Faqs
            </Link>
            <Link href="#contact" className={getLinkClass("contact")}>
              Contacts
            </Link>
          </nav>

          {/* Hamburger Icon (Mobile Only) */}
          <div className="absolute top-6 right-6 lg:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-[#2B2B2B] focus:outline-none p-2"
            >
              <Image
                src="/assets/menu.png"
                alt="Sneaker"
                height={25}
                width={25}
              />
            </button>
          </div>

          {/* Center Image on top of background */}
          <div className="relative z-10 flex items-center justify-center h-full min-h-[500px] lg:min-h-screen pt-20 lg:pt-0">
            <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]">
              <Image
                src="/assets/public.png"
                alt="Sneaker"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Off-Canvas Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Off-Canvas Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button onClick={toggleMenu} className="text-[#2B2B2B]">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-[18px] font-medium text-[#2B2B2B]">
            <Link
              href="#home"
              onClick={toggleMenu}
              className={getMobileLinkClass("home")}
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={toggleMenu}
              className={getMobileLinkClass("about")}
            >
              About
            </Link>
            <Link
              href="#features"
              onClick={toggleMenu}
              className={getMobileLinkClass("features")}
            >
              Features
            </Link>
            <Link
              href="#faqs"
              onClick={toggleMenu}
              className={getMobileLinkClass("faqs")}
            >
              Faqs
            </Link>
            <Link
              href="#contact"
              onClick={toggleMenu}
              className={getMobileLinkClass("contact")}
            >
              Contacts
            </Link>
          </nav>

          <div className="mt-auto">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="mb-4 opacity-50"
            />
            <p className={`text-xs text-gray-400 ${raleway.className}`}>
              © 2026 SNEAKER APP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
