import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import HeroScrollytelling from "@/components/HeroScrollytelling";
import UrbanAgility from "@/components/UrbanAgility";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import CostCalculator from "@/components/CostCalculator";
import ModelTrims from "@/components/ModelTrims";
import NetworkLocations from "@/components/NetworkLocations";
import InquiryBooking from "@/components/InquiryBooking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="w-full bg-[#0B0C0E] text-[#F4F4F6]">
        <HeroScrollytelling />
        <UrbanAgility />
        <TechnicalSpecs />
        <CostCalculator />
        <ModelTrims />
        <NetworkLocations />
        <InquiryBooking />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
