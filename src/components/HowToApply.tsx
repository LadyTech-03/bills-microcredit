import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MapPin, IdCard, RefreshCw } from "lucide-react";
import { GiTakeMyMoney } from "react-icons/gi";



gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "CALL US",
    description: "Let's talk about your needs",
    icon: Phone,
    // image: "/images/call.png",
    image: "https://ik.imagekit.io/nsuolqs5g/others/call.png",
  },
  {
    id: 2,
    title: "WE COME TO YOU",
    description: "No queues, no branches.",
    icon: MapPin,
    // image: "/images/come_to_you.jpg",
    image: "https://ik.imagekit.io/nsuolqs5g/others/come_to_you.jpg?updatedAt=1764454772813",
  },
  {
    id: 3,
    title: "SUBMIT YOUR GHANA CARD",
    description: "That's all we need.",
    icon: IdCard,
    // image: "/images/ghana_card.jpg",
    image: "https://ik.imagekit.io/nsuolqs5g/others/ghana_card.jpg?updatedAt=1764454761085",
  },
  {
    id: 4,
    title: "QUICK FUND DISBURSEMENT",
    description: "Mobile Money or Bank.",
    icon: GiTakeMyMoney,
    // image: "/images/quick_fund.jpg",
    image: "https://ik.imagekit.io/nsuolqs5g/others/quick_fund.jpg?updatedAt=1764454761713",
  },
  {
    id: 5,
    title: "REPAY EASILY",
    description: "Use USSD code",
    icon: RefreshCw,
    // image: "/images/repay.jpg",
    image: "https://ik.imagekit.io/nsuolqs5g/others/2155a319-5f85-4a3f-9468-82b1308a1302.jpg",
  },
];

const HowToApply = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const bgOverlayRef = useRef<HTMLDivElement>(null);
  const bgOverlayRef2 = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    const progressLine = progressLineRef.current;
    const bgOverlay = bgOverlayRef.current;
    const bgOverlay2 = bgOverlayRef2.current;
    const ctaSection = ctaSectionRef.current;
    const timeline = timelineRef.current;

    if (!container || !scrollContainer || !progressLine || !bgOverlay || !bgOverlay2 || !ctaSection || !timeline) return;

    // Calculate the total scroll distance (reduced spacing)
    const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

    // Animate background opacity on entry
    gsap.fromTo(
      [bgOverlay, bgOverlay2],
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );

    // Create the horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Animate the horizontal scroll
    tl.to(scrollContainer, {
      x: -scrollWidth,
      ease: "none",
    });

    // Fade out red background and timeline when entering CTA section
    gsap.fromTo(
      [bgOverlay, bgOverlay2],
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ctaSection,
          start: "left 60%",
          end: "left 30%",
          scrub: 1,
          containerAnimation: tl,
        },
      }
    );

    // Fade out timeline with background
    gsap.fromTo(
      timeline,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ctaSection,
          start: "left 60%",
          end: "left 30%",
          scrub: 1,
          containerAnimation: tl,
        },
      }
    );

    // Animate the progress line
    gsap.to(progressLine, {
      scaleX: 1,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
      },
    });

    // Animate each step card
    gsap.utils.toArray<HTMLElement>(".step-card").forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0.4,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: "left 80%",
            end: "left 20%",
            scrub: 1,
            containerAnimation: tl,
          },
        }
      );
    });

    // Animate step numbers
    gsap.utils.toArray<HTMLElement>(".step-number").forEach((num) => {
      gsap.fromTo(
        num,
        {
          scale: 0.8,
          opacity: 0.3,
        },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: num,
            start: "left center",
            end: "center center",
            scrub: 1,
            containerAnimation: tl,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="how-to-apply"
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Animated Background Overlay */}
      <div
        ref={bgOverlayRef}
        className="absolute inset-0 bg-primary opacity-0"
        style={{ opacity: 0 }}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* Diagonal Lines Pattern */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="diagonal-lines"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="0"
                  y1="40"
                  x2="40"
                  y2="0"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
          </svg>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Section Header - Fixed */}
      <div ref={bgOverlayRef2} className="absolute top-12 left-0 right-0 z-10 text-center px-4">
        <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-2">
          Simple Process
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white my-6">
          How to Apply
        </h2>
        <p className="text-white/70 text-base max-w-2xl mx-auto">
          Get your loan in 5 easy steps
        </p>
      </div>

      {/* Timeline Container - Fixed at bottom third */}
      <div ref={timelineRef} className="absolute bottom-32 left-0 right-0 h-2 z-20 px-8">
        {/* Background Line */}
        <div className="absolute inset-0 bg-white/20 rounded-full" />
        {/* Progress Line */}
        <div
          ref={progressLineRef}
          className="absolute inset-0 bg-white rounded-full origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="absolute top-0 left-0 h-full flex items-center pl-[10vw] gap-32"
        style={{ width: `${steps.length * 50 + 10}vw` }}
      >
        {/* Step Cards */}
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.id}
              className="w-[45vw] sm:w-[35vw] lg:w-[25vw] flex-shrink-0 flex flex-col items-center justify-center"
            >
              {/* Step Number on Timeline */}
              <div className="step-number absolute bottom-32 z-30">
                <div className="relative">
                  {/* Number Circle */}
                  <div className="size-20 rounded-full bg-white flex items-center justify-center shadow-xl">
                    <span className="text-2xl font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  {/* Connecting Line to Card */}
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-white/40" />
                </div>
              </div>

              {/* Step Card */}
              <div className="step-card w-full mb-44">
                {/* <div className="relative bg-topbar rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group h-[280px]"> */}
                <div className="relative bg-topbar rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group h-[280px]">
                  {/* Background Image */}
                  <img
                    src={step.image}
                    alt={step.title}
                    className="absolute inset-0 w-[25vw] h-full object-cover mx-auto"
                  />
                  
                  {/* Dark Gradient Overlay for Text Visibility */}
                  <div className="absolute inset-0 bg-black/70 hover:bg-black/90 transition-colors duration-300" />
                  
                  {/* Card Content - Centered */}
                  <div className="relative h-full flex flex-col justify-center items-center text-center p-6 px-8 z-10">
                    {/* Icon with Gradient Background */}
                    <div className="relative w-14 h-14 mb-4">
                      <div className="relative w-full h-full rounded-2xl flex items-center justify-center">
                        <IconComponent className="size-10 text-white" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-medium text-white/90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* End CTA - Background Transition */}
        <div ref={ctaSectionRef} className="cta-section w-screen h-screen flex-shrink-0 relative">
          {/* White Background with Image */}
          <div className="absolute inset-0 bg-white">
            {/* Background Image */}
            <img
              // src="/images/cta-woman.png"
              src="https://ik.imagekit.io/nsuolqs5g/others/cta-woman.png?updatedAt=1764454769933"
              alt="Apply Now"
              className="absolute inset-0 w-[40vw] h-auto object-cover object-center"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* CTA Content */}
          <div className="relative h-full flex items-center justify-center text-center text-white px-8">
            <div className="max-w-3xl">
              <h3 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Are you Ready?
              </h3>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-10">
                Call us now
              </p>

              {/* Phone Numbers */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                {/* Phone 1 */}
                <a
                  href="tel:0596920833"
                  className="group flex items-center gap-3 px-8 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    {/* <div className="text-xs text-white/70 font-medium uppercase tracking-wide">Mobile</div> */}
                    <div className="text-2xl font-black text-white tracking-wider">059 692 0833</div>
                  </div>
                </a>

                {/* Phone 2 */}
                <a
                  href="tel:0302200390"
                  className="group flex items-center gap-3 px-8 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    {/* <div className="text-xs text-white/70 font-medium uppercase tracking-wide">Mob</div> */}
                    <div className="text-2xl font-black text-white tracking-wider">030 220 0390</div>
                  </div>
                </a>
              </div>

              {/* Additional Info */}
              {/* <p className="text-sm text-white/60">
                Get a loan for any purpose
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/60 animate-bounce">
        <span className="text-sm font-medium">See more</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};

export default HowToApply;
