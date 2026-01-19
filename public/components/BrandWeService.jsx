import { Raleway } from "next/font/google";
import Image from "next/image";
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});
function BrandWeService() {
  const boxes = [
    "/assets/nike.png",
    "/assets/jorden.png",
    "/assets/adidas.png",
    "/assets/timberland.png",
    "/assets/ugg.png",
    "/assets/dior.png",
  ];
  return (
    <div className="py-10 bg-[#00000005]">
      <h1
        className={`text-[#2B2B2B] text-[35px] pt-10 font-bold text-center ${raleway.className}`}
      >
        Brand We Service
      </h1>
      <div className="mx-auto px-6 lg:px-32 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {boxes.map((src, index) => (
            <div
              key={index}
              className="w-full max-w-[170px] h-[108px] bg-white flex justify-center items-center rounded-md shadow-sm hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`box ${index + 1}`}
                width={80} // adjust image size
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandWeService;
