import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import CoreOfferings from "@/components/CoreOfferings";
import HowToApply from "@/components/HowToApply";
import RepaymentUSSD from "@/components/RepaymentUSSD";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

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
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
