import { MapPin } from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const OurReach = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-topbar">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-topbar-foreground mb-4">
            Our Reach
          </h2>
          <p className="text-xl text-topbar-foreground max-w-3xl mx-auto">
            Bills serves <span className="font-bold text-primary">all 16 regions of Ghana.</span> Whether you're in the heart of Accra or a remote town, our officers will meet you where you are.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          {/* Left Column - Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
            <img
              // src="/images/about_us/ghana_map.png"
              src="https://ik.imagekit.io/nsuolqs5g/others/ghana_map.png?updatedAt=1764454775206"
              alt="Ghana Map - Bills Microcredit Coverage"
              className="w-full h-full object-contain p-8 hover:scale-105 transition-all duration-1000"
              loading="eager"
            />
            {/* <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-lg px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" strokeWidth={2.5} />
                <span className="font-bold text-gray-900 dark:text-white">16 Regions</span>
              </div>
            </div> */}
          </div>

          {/* Right Column - Regional Stats */}
          <div className="space-y-6">
            <div className="rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-topbar-foreground leading-relaxed mb-6">
                Our branchless model allows us to reach every corner of Ghana. No matter where you are, Bills Microcredit is just <span className="font-bold text-primary">a call away.</span>
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl">
                  <AnimatedCounter value={16} suffix={"+"} className="text-3xl text-topbar-foreground" />
                  <div className="text-sm font-medium text-topbar-foreground">Regions Covered</div>
                </div>
                <div className="text-center p-4 rounded-xl">
                  <AnimatedCounter value={100} suffix={"%"} className="text-3xl text-topbar-foreground" />
                  <div className="text-sm font-medium text-topbar-foreground">Ghana Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurReach;
