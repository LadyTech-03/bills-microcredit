import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import { Quote, Calendar, Award, Heart, Users, TrendingUp, CircleCheck } from "lucide-react";

const Ambassadors = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Community presence images - Add your image URLs here
  const communityImages = [
    "/images/team/ambassador/community-1.jpg",
    "/images/team/ambassador/community-2.jpg",
    "/images/team/ambassador/community-3.jpg",
    "/images/team/ambassador/community-4.jpg",
    "/images/team/ambassador/community-5.jpg",
    "/images/team/ambassador/community-6.jpg",
  ];

  // Ambassador data
  const ambassador = {
    name: "Gloria Sarfo",
    title: "OUR AMBASSADOR",
    image: "/images/team/ambassador/hero.webp",
    portraitImage: "/images/team/ambassador/gloria_safo.jpg",
    quote: "Empowering dreams, one loan at a time. Together, we rise!",
    signature: "/images/team/ambassador/signature.png",
    story: {
      origin: "Born and raised in Kumasi, I've always believed in the power of hard work and determination. My journey from humble beginnings to becoming one of Ghana's most recognized faces taught me that with the right support, anything is possible.",
      passion: "Financial empowerment isn't just about money, it's about dignity, hope, and opportunity. I've seen firsthand how access to credit can transform lives, families, and entire communities.",
      connection: "Bills Microcredit shares my vision of a Ghana where everyone has the chance to succeed. Their commitment to serving the underserved aligns perfectly with my mission to uplift others."
    },
    milestones: [
      {
        year: "2015 ",
        title: "Career Beginnings",
        description: "Started acting career, understanding the value of perseverance",
        icon: TrendingUp
      },
      {
        year: "2020",
        title: "Entrepreneurship Journey",
        description: "Launched multiple businesses, experiencing firsthand the need for accessible financing",
        icon: Award
      },
      {
        year: "2023",
        title: "Joined Bills Microcredit",
        description: "Became Brand Ambassador to champion financial inclusion",
        icon: Heart
      },
      {
        year: "2025",
        title: "Community Impact",
        description: "Helped reach over 100,000 clients through advocacy and awareness",
        icon: Users
      },
      {
        year: "Future",
        title: "Vision 2030",
        description: "Expanding financial literacy programs to every region of Ghana",
        icon: Calendar
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      {/* Hero Section - Cinematic Spotlight */}
      <section ref={heroRef} className="relative h-[90vh] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 z-10" />
          <img
            src={ambassador.image}
            alt={ambassador.name}
            className="w-full md:w-[75%] mx-auto h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-20 h-full flex items-end justify-center text-center px-4"
        >
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider"
              style={{ fontFamily: "'Cormorant Upright', sans-serif" }}
            >
              {ambassador.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary font-bold mb-20"
              style={{ fontFamily: "'rubik', sans-serif" }}
            >
              {ambassador.title}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Signature Quote Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Quote className="w-16 h-16 text-primary mx-auto mb-8 opacity-50" />
            <p
              className="text-3xl md:text-4xl italic mb-8 leading-relaxed"
              style={{ fontFamily: "'Edu NSW ACT Hand Pre', cursive" }}
            >
              {ambassador.quote}
            </p>
            {/* Signature */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="text-4xl font-bold text-primary" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  {ambassador.name.split(' ')[0]}
                </div>
                <div className="h-0.5 bg-primary/50 mt-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Split Screen */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            The Journey
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ambassador.portraitImage}
                  alt={ambassador.name}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>

            {/* Right - Story */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">Origin</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ambassador.story.origin}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">Passion</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ambassador.story.passion}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">Connection</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ambassador.story.connection}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Presence Section - Infinite Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Community Presence
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <InfiniteCarousel images={communityImages} autoPlaySpeed={3000} />
          </motion.div>
        </div>
      </section>

      {/* Timeline Carousel - Milestones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            Milestones & Impact
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />

            {/* Milestones */}
            <div className="space-y-12">
              {ambassador.milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                      <div className="inline-block bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <p className="text-primary font-bold text-xl mb-2">{milestone.year}</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        {/* <IconComponent className="w-8 h-8 text-white" /> */}
                        <CircleCheck className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ambassadors;
