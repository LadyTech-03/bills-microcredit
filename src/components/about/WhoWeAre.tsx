import { Building2, Users, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import { LuBriefcaseBusiness } from "react-icons/lu";
import AnimatedCounter from "../AnimatedCounter";

const WhoWeAre = () => {
  const stats = [
    { number: 16, suffix: "+", label: "Years of Service", icon: LuBriefcaseBusiness },
    { number: 2000, suffix: "+", label: "Staff Nationwide", icon: Users },
    { number: 500000, suffix: "", label: "Clients Served", icon: Heart },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Bills Microcredit was founded in <span className="font-bold text-primary">2009</span> and officially incorporated in <span className="font-bold text-primary">2011</span>. We are licensed by the Bank of Ghana to operate as a Lending Institution under the Non-Bank Financial Institutions (NBFI) Act.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With 16 years of consistent service, we have become a reliable financial partner to thousands of Ghanaians.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We operate with over <span className="font-bold text-primary">2,000 staff nationwide</span>, delivering our services right to your doorstep. Our branchless model means convenience is central—we come to you, wherever you are.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              We don't just offer loans; we build lasting relationships that support your journey through life and business.
            </p>

            {/* License Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-topbar/50 rounded-xl">
              <Award className="w-6 h-6 text-yellow-500" strokeWidth={2.5} />
              <div>
                <div className="text-sm font-medium text-topbar-foreground">Licensed by</div>
                <div className="text-base font-bold text-topbar-foreground">Bank of Ghana (NBFI)</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div>
            {/* Staff Durbar Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-100 dark:bg-gray-800">
              <img
                src="/images/about_us/growing_staff.jpg"
                alt="Bills Microcredit Staff Durbar"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-semibold text-lg">Our Growing Team Across the Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats - Horizontal List */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-topbar flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-topbar-foreground" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="hidden md:block w-px h-16 bg-gray-200 dark:bg-gray-700 ml-auto" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
