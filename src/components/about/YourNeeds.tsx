import { TrendingUp, AlertCircle, Lightbulb, Briefcase, HelpCircle } from "lucide-react";
import { GrGrow } from "react-icons/gr";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { PiHandCoinsBold } from "react-icons/pi";




const YourNeeds = () => {
  const needs = [
    {
      icon: LuBriefcaseBusiness,
      text: "Are you in business and intending to expand operations?",
    },
    {
      icon: AlertCircle,
      text: "Do you have an emergency need that must be satisfied now?",
    },
    {
      icon: GrGrow,
      text: "Do you have soft skills that you intend to use to start your own business?",
    },
    {
      icon: PiHandCoinsBold,
      text: "Are you a salary worker wanting to bridge the finance gap?",
    },
    {
      icon: HelpCircle,
      text: "What do you need money for? Speak to us!",
    },
  ];

  const clients = [
    {
      name: "Shop Owner",
      image: "/images/about_us/shop_owner.jpg",
    },
    {
      name: "Tailor",
      // image: "/images/about_us/tailor.jpg",
      image: "https://ik.imagekit.io/nsuolqs5g/others/tailor.jpg?updatedAt=1764454764353",
    },
    {
      name: "Nurse",
      // image: "/images/about_us/nurse.jpg",
      image: "https://ik.imagekit.io/nsuolqs5g/others/nurse.jpg?updatedAt=1764454763685",
    },
    {
      name: "Driver",
      // image: "/images/about_us/driver.jpg",
      image: "https://ik.imagekit.io/nsuolqs5g/others/driver.jpg?updatedAt=1764454764680",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Needs, Our Priority
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            At Bills, we don't put you in a box, we meet you where you are
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Needs List */}
          <div className="space-y-4">
            {needs.map((need, index) => {
              const IconComponent = need.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-topbar flex items-center justify-center flex-shrink-0 group-hover:bg-topbar/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-topbar-foreground" strokeWidth={2.5} />
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pt-2">
                    {need.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column - Client Photos */}
          <div className="grid grid-cols-2 gap-4">
            {clients.map((client, index) => {
              return (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-lg aspect-square bg-gray-100 dark:bg-gray-800"
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    {/* <p className="text-white font-semibold text-sm">{client.name}</p> */}
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

export default YourNeeds;
