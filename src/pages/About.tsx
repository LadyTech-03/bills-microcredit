import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhoWeAre from "@/components/about/WhoWeAre";
import AnniversaryVideo from "@/components/about/AnniversaryVideo";
import MissionVision from "@/components/about/MissionVision";
import YourNeeds from "@/components/about/YourNeeds";
import OurReach from "@/components/about/OurReach";
import FAQs from "@/components/about/FAQs";
import Gallery from "@/components/Gallery";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import HowToApply from "@/components/HowToApply";
import RepaymentUSSD from "@/components/RepaymentUSSD";
import PageHero from "@/components/PageHero";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Page Hero with Background Image */}
      <PageHero
        title="Who We Are"
        // image="/images/about_us/hero.jpg"
        image="https://ik.imagekit.io/nsuolqs5g/others/hero.jpg?updatedAt=1764454768531"
        breadcrumbItems="About Us"
      />
      
      {/* Page Sections */}
      <WhoWeAre />
      <AnniversaryVideo />
      <MissionVision />
      <YourNeeds />
      <OurReach />
      <HowToApply />
      <RepaymentUSSD />
      <Gallery />
      <FAQs />
      
      <Footer />
    </div>
  );
};

export default About;
