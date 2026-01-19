import Home from "@/public/components/Home";
import HowsItWorks from "@/public/components/HowsItWorks";
import BrandWeServics from "@/public/components/BrandWeService";
import AboutUs from "@/public/components/AboutUs";
import OurCustomerLoves from "@/public/components/OurCustomerLoves";
import Faqs from "@/public/components/Faq";
import Footer from "@/public/components/Footer";

export default function Page() {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="features">
        <HowsItWorks />
        <BrandWeServics />
      </div>
      <div id="about">
        <AboutUs />
        <OurCustomerLoves />
      </div>
      <div id="faqs">
        <Faqs />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
