"use client";
import React, { useState } from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const faqData = [
  {
    question: "How do I book a cleaning service?",
    answer:
      "You can book a service directly through our website by selecting your desired package, choosing a pickup time, and checking out securely.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We currently cover the greater metropolitan area. Please enter your zip code on our booking page to see if we service your location.",
  },
  {
    question: "how long does the cleaning process take?",
    answer:
      "Standard cleaning takes about 3-5 business days. Express service is available for a 24-48 hour turnaround time.",
  },
  {
    question: "Are my sneakers insured during the process?",
    answer:
      "Yes, all sneakers are insured from the moment we pick them up until they are returned to you.",
  },
  {
    question: "Do you clean materials other than leather?",
    answer:
      "Absolutely! We specialize in leather, suede, nubuck, canvas, knit, and more.",
  },
  {
    question: "What if I am not satisfied with the result?",
    answer:
      "Customer satisfaction is our priority. If you're not happy, let us know within 24 hours of delivery, and we'll address the issue.",
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-18 bg-[#F5F5F5] overflow-x-hidden">
      <h1
        className={`text-[#2B2B2B] text-[40px] mt-10 font-bold text-center ${raleway.className}`}
      >
        FAQ
      </h1>
      <p
        className={`text-[#2B2B2B] text-[20px] text-center mt-5 w-[90%] md:w-[60%] lg:w-[37%] mx-auto font-normal ${raleway.className}`}
      >
        We clean and restore your favorite sneakers using the safest and best
        practices in the industry.
      </p>

      <div className="max-w-4xl mx-auto mt-16 px-6 flex flex-col ">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-t-[#E0E0E0] border-t-2 p-2 lg:p-3 transition-all duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h3
                className={`text-[#2B2B2B] text-[16px] lg:text-[18px] font-bold ${raleway.className}`}
              >
                {item.question}
              </h3>
              <button
                className="text-[#2B2B2B] text-3xl lg:text-4xl font-light leading-none focus:outline-none transition-transform duration-300 transform"
                style={{
                  transform:
                    openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p
                className={`text-gray-600 text-[16px] lg:text-[18px] leading-relaxed ${raleway.className}`}
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
