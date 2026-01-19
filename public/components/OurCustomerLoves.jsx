"use cliet";
import { Raleway } from "next/font/google";
import Image from "next/image";
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});
function OurCustomerLoves() {
  return (
    <div className="py-10  border-t-[1px] border-gray-500">
      <h1
        className={`text-[#2B2B2B] text-[30px] mt-10 font-bold text-center ${raleway.className}`}
      >
        OUR CUSTOMERS LOVE US
      </h1>
      <p
        className={`text-[#2B2B2B] text-[20px] text-center mt-5 w-[90%] md:w-[60%] lg:w-[37%] mx-auto font-normal ${raleway.className}`}
      >
        We clean and restore your favorite sneakers using the safest and best
        practices in the industry.
      </p>
      {/* next part  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-24 mt-10">
        {/* Child Div 1 */}
        <div className="flex flex-col items-center bg-[#F5F5F5]  w-full max-w-[350px] mx-auto">
          <Image
            src="/assets/stars.png"
            alt="Stars Image"
            width={30}
            height={30}
            className="w-20 h-12 object-contain"
          />

          <h1
            className={`text-[#2B2B2B] text-[15px] font-bold text-center ${raleway.className}`}
          >
            Great Quality
          </h1>
          <p
            className={`text-[#2B2B2B] text-[15px] text-center pt-1 p-6 font-normal ${raleway.className}`}
          >
            The shoes are cleaned with high quality service.
          </p>
          <div className="flex mt-2 py-3 items-center gap-2">
            {/* Blue circle with tick */}
            <div className="w-4 h-4 rounded-full bg-blue-500 flex justify-center items-center">
              <Image
                src="/assets/tick.png"
                alt="tick Image"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <h1
              className={`text-[#000000] text-[15px] text-center font-normal ${raleway.className}`}
            >
              Kathleen
            </h1>
          </div>
        </div>

        {/* Child Div 2 */}
        <div className="flex flex-col items-center bg-[#F5F5F5]  w-full max-w-[350px] mx-auto">
          <Image
            src="/assets/stars.png"
            alt="Stars Image"
            width={30}
            height={30}
            className="w-20 h-12 object-contain"
          />

          <h1
            className={`text-[#2B2B2B] text-[15px] font-bold text-center ${raleway.className}`}
          >
            Great Quality
          </h1>
          <p
            className={`text-[#2B2B2B] text-[15px] text-center pt-1 p-6 font-normal ${raleway.className}`}
          >
            The shoes are cleaned with high quality service.
          </p>
          <div className="flex mt-3 items-center gap-2">
            {/* Blue circle with tick */}
            <div className="w-4 h-4 rounded-full bg-blue-500 flex justify-center items-center">
              <Image
                src="/assets/tick.png"
                alt="tick Image"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <h1
              className={`text-[#000000] text-[15px] text-center font-normal ${raleway.className}`}
            >
              Kathleen
            </h1>
          </div>
        </div>

        {/* Child Div 3 */}
        <div className="flex flex-col items-center bg-[#F5F5F5]  w-full max-w-[350px] mx-auto">
          <Image
            src="/assets/stars.png"
            alt="Stars Image"
            width={30}
            height={30}
            className="w-20 h-12 object-contain"
          />

          <h1
            className={`text-[#2B2B2B] text-[15px] font-bold text-center ${raleway.className}`}
          >
            Great Quality
          </h1>
          <p
            className={`text-[#2B2B2B] text-[15px] text-center pt-1 p-6 font-normal ${raleway.className}`}
          >
            The shoes are cleaned with high quality service.
          </p>
          <div className="flex mt-3 items-center gap-2">
            {/* Blue circle with tick */}
            <div className="w-4 h-4 rounded-full bg-blue-500 flex justify-center items-center">
              <Image
                src="/assets/tick.png"
                alt="tick Image"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <h1
              className={`text-[#000000] text-[15px] text-center font-normal ${raleway.className}`}
            >
              Kathleen
            </h1>
          </div>
        </div>

        {/* Child Div 4 */}
        <div className="flex flex-col items-center bg-[#F5F5F5]  w-full max-w-[350px] mx-auto">
          <Image
            src="/assets/stars.png"
            alt="Stars Image"
            width={30}
            height={30}
            className="w-20 h-12 object-contain"
          />

          <h1
            className={`text-[#2B2B2B] text-[15px] font-bold text-center ${raleway.className}`}
          >
            Great Quality
          </h1>
          <p
            className={`text-[#2B2B2B] text-[15px] text-center pt-1 p-6 font-normal ${raleway.className}`}
          >
            The shoes are cleaned with high quality service.
          </p>
          <div className="flex mt-3 items-center gap-2">
            {/* Blue circle with tick */}
            <div className="w-4 h-4 rounded-full bg-blue-500 flex justify-center items-center">
              <Image
                src="/assets/tick.png"
                alt="tick Image"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <h1
              className={`text-[#000000] text-[15px] text-center font-normal ${raleway.className}`}
            >
              Kathleen
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCustomerLoves;
