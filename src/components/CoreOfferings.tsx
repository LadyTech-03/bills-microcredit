import { useState, useEffect } from "react";
import { TrendingUp, AlertCircle, Lightbulb, Clock, ArrowRight, Sparkles, Phone } from "lucide-react";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { GrGrow } from "react-icons/gr";
import { PiHandCoinsBold } from "react-icons/pi";

const offerings = [
  {
    id: 1,
    title: "Working Capital Loans",
    description: "Support to grow and scale your business.",
    icon: LuBriefcaseBusiness,
    image: "https://ik.imagekit.io/nsuolqs5g/others/business_expansion.jpg?updatedAt=1764454760957",
    gradient: "from-blue-500 to-cyan-500",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "Emergency Loans",
    description: "Quick relief when unexpected needs arise.",
    icon: AlertCircle,
    image: "https://ik.imagekit.io/nsuolqs5g/others/emergency.jpg?updatedAt=1764454760540",
    gradient: "from-red-500 to-orange-500",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: 3,
    title: "Start-up Capital Loans",
    description: "Turn your skills into a thriving business.",
    icon: GrGrow,
    image: "https://ik.imagekit.io/nsuolqs5g/others/startup.jpg?updatedAt=1764454773779",
    gradient: "from-green-500 to-emerald-500",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: 4,
    title: "Salary Loans",
    description: "Meet financial needs before payday.",
    icon: PiHandCoinsBold,
    image: "https://ik.imagekit.io/nsuolqs5g/others/salary.png?updatedAt=1764454766739",
    gradient: "from-purple-500 to-pink-500",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
];

const CoreOfferings = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offerings.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);


  // Smooth scroll to How to Apply section
  const scrollToHowToApply = () => {
    const howToApplySection = document.getElementById('how-to-apply');
    if (howToApplySection) {
      howToApplySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-topbar/5 overflow-hidden">

      <div className="max-w-full xl:max-w-[80%] 2xl:max-w-[70%] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full">
            <p className="text-primary text-sm font-medium tracking-wide uppercase">
              Our Products
            </p>
          </div>
          <h2 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Core Offerings
          </h2>
        </div>

        {/* Main Content - Featured Carousel + Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Featured Carousel */}
          <div className="relative hidden xl:block order-first">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] group">
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
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-white/20 backdrop-blur-sm`}>
                        {(() => {
                          const IconComponent = offering.icon;
                          return <IconComponent className="w-8 h-8 text-white" />;
                        })()}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-topbar-foreground text-lg">
                      {offering.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + offerings.length) % offerings.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <ArrowRight className="w-6 h-6 rotate-180" />
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % offerings.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-3 justify-center mt-8">
              {offerings.map((offering, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? `w-12 bg-primary`
                      : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon;
              const isActive = activeIndex === index;
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={offering.id}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    isActive ? "scale-105" : "scale-100 hover:scale-105"
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    scrollToHowToApply();
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card */}
                  <div className={`relative h-full rounded-2xl p-8 transition-all duration-500  ${
                    isActive 
                      ? "bg-white shadow-2xl ring-2 ring-primary" 
                      : "bg-white/80 shadow-lg hover:shadow-xl backdrop-blur-sm"
                  }`}>
                    {/* Subtle Background on Hover */}
                    <div className={`absolute inset-0 rounded-2xl ${offering.bgColor} dark:bg-gray-700/30 opacity-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : ""
                    }`}></div>

                    {/* Icon */}
                    <div className="relative">
                      <div className={`inline-flex p-4 rounded-xl transition-all duration-500 ${
                        isActive
                          ? `bg-primary text-white shadow-lg`
                          : `${offering.bgColor} dark:bg-gray-700 ${offering.color} dark:text-gray-300`
                      }`}>
                        <IconComponent className="w-6 h-6 xl:w-8 xl:h-8" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className={`text-xl md:text-2xl xl:text-2xl 2xl:text-3xl font-bold mb-3 transition-all duration-500 ${
                        isActive
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-800 dark:text-gray-200"
                      }`}>
                        {offering.title}
                      </h3>
                      <p className={`text-base leading-relaxed transition-all duration-500 ${
                        isActive
                          ? "text-gray-600 dark:text-gray-400"
                          : "text-gray-500 dark:text-gray-500"
                      }`}>
                        {offering.description}
                      </p>

                      {/* Learn More Link */}
                      <div className={`flex items-center gap-2 mt-4 text-sm font-semibold transition-all duration-300 ${
                        isActive ? "text-primary" : "text-gray-400"
                      }`}>
                        <span>Apply Now</span>
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                          isHovered ? "translate-x-1" : ""
                        }`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Need help choosing the right loan?
              </h3>
            </div>
            <button className="px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 group">
              <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Call Us</span>
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CoreOfferings;
