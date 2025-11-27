import { useState, useEffect } from "react";
import { TrendingUp, AlertCircle, Lightbulb, Clock } from "lucide-react";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { GrGrow } from "react-icons/gr";
import { PiHandCoinsBold } from "react-icons/pi";




const offerings = [
  {
    id: 1,
    title: "Business Expansion Loan",
    description: "Support to grow and scale your business.",
    icon: LuBriefcaseBusiness,
    image: "/images/business_expansion.jpg",
  },
  {
    id: 2,
    title: "Emergency Loan",
    description: "Quick relief when unexpected needs arise.",
    icon: AlertCircle,
    image: "/images/business_expansion.jpg",
  },
  {
    id: 3,
    title: "Start-Up Loan",
    description: "Turn your skills into a thriving business.",
    icon: GrGrow,
    image: "/images/business_expansion.jpg",
  },
  {
    id: 4,
    title: "Salary Advance",
    description: "Meet financial needs before payday.",
    icon: PiHandCoinsBold,
    image: "/images/business_expansion.jpg",
  },
];

const CoreOfferings = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offerings.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">
            Our Products
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Core Offerings
          </h2>
        </div>

        {/* Main Content Grid - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 items-center">
          {/* Left Column - First Two Offerings */}
          <div className="space-y-16 lg:space-y-48">
            {offerings.slice(0, 2).map((offering, index) => {
              const IconComponent = offering.icon;
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={offering.id}
                  className={`flex gap-4 transition-all duration-500 cursor-pointer ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`size-20 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-primary text-white scale-110"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <IconComponent className="size-10" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-1 transition-all duration-500 ${
                        isActive
                          ? "text-gray-900 dark:text-white text-xl"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {offering.title}
                    </h3>
                    <p
                      className={`text-base leading-relaxed transition-all duration-500 ${
                        isActive
                          ? "text-gray-600 dark:text-gray-400"
                          : "text-gray-500 dark:text-gray-500"
                      }`}
                    >
                      {offering.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center - Carousel */}
          <div className="relative order-first lg:order-none">
            <div className="relative rounded-2xl overflow-hidden shadow-3xl aspect-[4/5]">
              {offerings.map((offering, index) => (
                <div
                  key={offering.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-2 justify-center mt-6">
              {offerings.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Last Two Offerings */}
          <div className="space-y-16 lg:space-y-48">
            {offerings.slice(2, 4).map((offering, index) => {
              const IconComponent = offering.icon;
              const actualIndex = index + 2;
              const isActive = activeIndex === actualIndex;

              return (
                <div
                  key={offering.id}
                  className={`flex gap-4 transition-all duration-500 cursor-pointer ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                  onClick={() => setActiveIndex(actualIndex)}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`size-20 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-primary text-white scale-110"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <IconComponent className="size-10" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-1 transition-all duration-500 ${
                        isActive
                          ? "text-gray-900 dark:text-white text-xl"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {offering.title}
                    </h3>
                    <p
                      className={`text-base leading-relaxed transition-all duration-500 ${
                        isActive
                          ? "text-gray-600 dark:text-gray-400"
                          : "text-gray-500 dark:text-gray-500"
                      }`}
                    >
                      {offering.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
