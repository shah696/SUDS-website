import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import ButtonDownload from "./ui/ButtonDownload";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});
function HowsItWorks() {
  return (
    <div>
      <div className="py-10 bg-white overflow-x-hidden">
        <h1
          className={`text-[#2B2B2B] text-[40px] mt-10 font-bold text-center ${raleway.className}`}
        >
          Hows it works
        </h1>
        <p
          className={`text-[#2B2B2B] text-[20px] text-center mt-5 w-[90%] md:w-[60%] lg:w-[37%] mx-auto font-normal ${raleway.className}`}
        >
          We clean and restore your favorite sneakers using the safest and best
          practices in the industry.
        </p>
        {/* img  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-24 mt-10">
          {/* Child Div 1 */}
          <div className="flex flex-col items-center p-4 w-full max-w-[350px] mx-auto">
            <div className="relative">
              <Image
                src="/assets/circle.png"
                alt="Small Image"
                width={4}
                height={4}
                className="w-12 h-12 object-contain"
              />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                1
              </span>
            </div>
            <Image
              src="/assets/1.png"
              alt="Big Image"
              width={128}
              height={128}
              className="w-32 h-32 object-contain my-4"
            />
            <h1
              className={`text-[#2B2B2B] text-[20px] font-bold text-center ${raleway.className}`}
            >
              Book an appointment
            </h1>
            <p
              className={`text-[#2B2B2B] text-[15px] text-center pt-1 font-normal ${raleway.className}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>

          {/* Child Div 2 */}
          <div className="flex flex-col items-center p-4 w-full max-w-[350px] mx-auto">
            <div className="relative">
              <Image
                src="/assets/circle.png"
                alt="2 Image"
                width={4}
                height={4}
                className="w-12 h-12 object-contain"
              />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                2
              </span>
            </div>
            <Image
              src="/assets/2.png"
              alt="Big Image"
              width={128}
              height={128}
              className="w-32 h-32 object-contain my-4"
            />
            <h1
              className={`text-[#2B2B2B] text-[20px] font-bold text-center ${raleway.className}`}
            >
              Free Pickup
            </h1>
            <p
              className={`text-[#2B2B2B] text-[15px] text-center pt-1 font-normal ${raleway.className}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>

          {/* Child Div 3 */}
          <div className="flex flex-col items-center p-4 w-full max-w-[350px] mx-auto">
            <div className="relative">
              <Image
                src="/assets/circle.png"
                alt="3 Image"
                width={4}
                height={4}
                className="w-12 h-12 object-contain"
              />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                3
              </span>
            </div>
            <Image
              src="/assets/3.png"
              alt="Big Image"
              width={128}
              height={128}
              className="w-32 h-32 object-contain my-4"
            />
            <h1
              className={`text-[#2B2B2B] text-[20px] font-bold text-center ${raleway.className}`}
            >
              Get your Cleaned shoes
            </h1>
            <p
              className={`text-[#2B2B2B] text-[15px] text-center pt-1 font-normal ${raleway.className}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <ButtonDownload />
        </div>
      </div>
    </div>
  );
}

export default HowsItWorks;
