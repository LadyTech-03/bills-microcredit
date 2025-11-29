import { ArrowRight, Users, Calendar1, Heart } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <div ref={ref} className="text-3xl font-black text-topbar-foreground mb-1" />;
};

const AboutUs = () => {
  const stats = [
    { number: 16, suffix: "+", label: "Years of Service", icon: Calendar1 },
    { number: 1500, suffix: "+", label: "Dedicated Staff", icon: Users },
    { number: 100, suffix: "%", label: "Customer Focus", icon: Heart },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-topbar dark:bg-gray-800 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-topbar-foreground mb-6 leading-tight">
              Who We Are
            </h2>

            {/* Description */}
            <div className="space-y-4 text-topbar-foreground text-lg leading-relaxed mb-8">
              <p>
                <span className="font-bold ">Bills Microcredit</span> was founded in 2009 and officially incorporated in 2011. With 16 years of consistent service, we have become a reliable financial partner to thousands of Ghanaians.
              </p>
              <p>
                From a humble team of two, we now operate with over 1,500 dedicated staff nationwide. Our branchless model means convenience is central, we come to you, wherever you are.
              </p>
              <p className="font-medium text-topbar-foreground">
                We don't just offer loans; we build lasting relationships that support your journey through life and business.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-topbar-foreground font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-500 group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-topbar-foreground flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-topbar" strokeWidth={2.5} />
                    </div>
                    <div>
                      <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                      <div className="text-sm font-medium text-topbar-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Additional Highlight Card */}
            {/* <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 shadow-lg text-white">
              <p className="text-lg font-bold mb-2">Our Promise</p>
              <p className="text-white/90 text-sm leading-relaxed">
                Convenience at your doorstep with our branchless model. We come to you, wherever you are in Ghana.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
