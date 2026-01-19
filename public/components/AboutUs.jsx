"use cliet";
import { Raleway } from "next/font/google";
import Image from "next/image";
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});
function AboutUs() {
  return (
    <div className="py-10">
      <h1
        className={`text-[#2B2B2B] mt-10 sm:mt-20 text-[35px] text-center lg:pl-44 font-bold  ${raleway.className}`}
      >
        ABOUT US
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-6 lg:px-24 mt-5 sm:mt-10">
        <div className="pt-4 flex justify-center items-center relative lg:bottom-24 lg:right-12">
          <Image src="/assets/foot.png" alt="foot" width={250} height={250} />
        </div>
        <div className="px-5 sm:px-0 mt-5 sm:mt-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
