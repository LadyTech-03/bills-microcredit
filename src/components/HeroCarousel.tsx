import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  {
    image: hero1,
    title: "Get a loan with just your Ghana Card.",
    description: "Fast, easy access to credit. All you need is your Ghana Card.",
    cta: "Apply Now",
    overlayClass: "bg-gradient-to-br from-primary/50 via-primary/20 to-black/30",
    position: "left" as const,
  },
  {
    image: hero2,
    title: "No queues, your loan is just a call away.",
    description: "Skip the long waits. Get your loan approved quickly with just a phone call.",
    cta: "Call Us Now",
    overlayClass: "bg-gradient-to-tl from-primary/50 via-primary/20 to-black/30",
    position: "center" as const,
  },
  {
    image: hero3,
    title: "We are in all 16 regions of Ghana.",
    description: "Wherever you are in Ghana, Bills Microcredit is there for you.",
    cta: "Find Us",
    overlayClass: "bg-gradient-to-tr from-primary/50 via-primary/20 to-black/30",
    position: "right" as const,
  },
  {
    image: hero4,
    title: "Get a loan from GHS 1,000 – GHS 150,000.",
    description: "Flexible loan amounts tailored to your needs. Start small or go big.",
    cta: "Discover More",
    overlayClass: "bg-gradient-to-bl from-primary/60 via-primary/10 to-black/30",
    position: "left" as const,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className="relative h-[calc(100vh-120px)] min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay with Angle */}
          <div className={`absolute inset-0 ${slide.overlayClass}`} />

          {/* Content */}
          <div className={`absolute inset-0 flex ${
            slide.position === "center" 
              ? "items-center justify-center" 
              : "items-center"
          }`}>
            <div className={`container mx-auto px-4 ${
              slide.position === "right" ? "flex justify-end" : ""
            }`}>
              <div className={`max-w-3xl animate-fade-in ${
                slide.position === "center" ? "text-center" : ""
              }`}>
                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in">
                  {slide.description}
                </p>

                {/* CTA Button */}
                <Button 
                  className="bg-primary hover:bg-topbar text-primary-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-scale-in z-50"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-12 bg-primary"
                : "w-8 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
