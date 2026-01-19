"use client";
import React from "react";
import Image from "next/image";

function ButtonDownload() {
  return (
    <div>
      <button className="mt-10 cursor-pointer w-[230px] sm:w-[300px] inline-flex flex-nowrap items-center justify-center gap-3 bg-black text-white px-6 py-3 whitespace-nowrap">
        <span>Download App Now</span>
        <Image
          src="/assets/download.png"
          alt="download"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
}

export default ButtonDownload;
