import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Footer() {
  return (
    <div className=" py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-32 grid grid-cols-1 lg:grid-cols-12 gap-24 text-start lg:text-left">
        {/* First Div */}
        <div className="lg:col-span-4  flex flex-col gap-4 items-start lg:items-start">
          <Image src="/assets/logo.png" alt="img" width={80} height={80} />
          <p
            className={`text-[#2B2B2B] text-[18px] font-normal ${raleway.className}`}
          >
            Sneaker Cleaning Pro’s
          </p>
          <div className="flex gap-8 mt-8">
            <Image
              src="/assets/insta.png"
              alt="img"
              width={34}
              height={24}
              className="cursor-pointer hover:opacity-75 transition-opacity"
            />
            <Image
              src="/assets/twitter.png"
              alt="img"
              width={34}
              height={24}
              className="cursor-pointer hover:opacity-75 transition-opacity"
            />
            <Image
              src="/assets/facebook.png"
              alt="img"
              width={34}
              height={24}
              className="cursor-pointer hover:opacity-75 transition-opacity"
            />
            <Image
              src="/assets/youtube.png"
              alt="img"
              width={34}
              height={24}
              className="cursor-pointer hover:opacity-75 transition-opacity"
            />
          </div>
        </div>

        {/* Second Div */}
        <div className="lg:col-span-4 flex justify-start lg:justify-between gap-10 lg:gap-0">
          <div className="flex flex-col gap-4 text-start">
            <span
              className={`text-gray-600 hover:text-black cursor-pointer transition-colors ${raleway.className}`}
            >
              Home
            </span>
            <span
              className={`text-gray-600 hover:text-black cursor-pointer transition-colors ${raleway.className}`}
            >
              About
            </span>
            <span
              className={`text-gray-600 hover:text-black cursor-pointer transition-colors ${raleway.className}`}
            >
              Features
            </span>
            <span
              className={`text-gray-600 hover:text-black cursor-pointer transition-colors ${raleway.className}`}
            >
              FAQs
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <span
              className={`text-[#2B2B2B] hover:text-black cursor-pointer transition-colors ${raleway.className}`}
            >
              Support
            </span>
            <span
              className={`text-[#2B2B2B] hover:text-black cursor-pointer transition-colors ${raleway.className}`}
            >
              Find Us
            </span>
            <span
              className={`text-[#2B2B2B] hover:text-black cursor-pointer transition-colors ${raleway.className}`}
            >
              Contact
            </span>
          </div>
        </div>

        {/* Third Div */}
        <div className="lg:col-span-4 flex flex-col gap-4 items-start lg:items-start">
          <h2 className={`text-[20px] font-bold ${raleway.className}`}>
            Download Our App Now
          </h2>

          <div className="flex gap-3">
            <Image
              src="/assets/app-store.png"
              alt="img"
              width={120}
              height={120}
              className="cursor-pointer hover:scale-105 transition-transform"
            />
            <Image
              src="/assets/google-play.png"
              alt="img"
              width={120}
              height={120}
              className="cursor-pointer hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
      <div
        className={`text-start text-[16px] text-[#2B2B2B] px-6 lg:px-36 mt-12 py-4 ${raleway.className}`}
      >
        © 2021 SUDS. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
