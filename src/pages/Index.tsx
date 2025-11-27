import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import CoreOfferings from "@/components/CoreOfferings";
import HowToApply from "@/components/HowToApply";
import RepaymentUSSD from "@/components/RepaymentUSSD";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <HeroCarousel />
      <CoreOfferings />
      <HowToApply />
      <RepaymentUSSD />
      <AboutUs />
      <Testimonials />
    </div>
  );
};

export default Index;
