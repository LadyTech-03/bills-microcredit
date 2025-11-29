import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface InfiniteCarouselProps {
  images: string[];
  autoPlaySpeed?: number;
}

const InfiniteCarousel = ({ images, autoPlaySpeed = 3000 }: InfiniteCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const controls = useAnimation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Duplicate images for infinite effect
  const duplicatedImages = [...images, ...images, ...images];

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Reset to middle set when reaching end
        if (next >= images.length * 2) {
          return images.length;
        }
        return next;
      });
    }, autoPlaySpeed);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isPlaying, autoPlaySpeed]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      // Reset to middle set when reaching start
      if (next < images.length) {
        return images.length * 2 - 1;
      }
      return next;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      // Reset to middle set when reaching end
      if (next >= images.length * 2) {
        return images.length;
      }
      return next;
    });
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Carousel Container */}
      <div className="relative h-[400px] md:h-[500px]">
        <motion.div
          className="flex gap-6 h-full"
          animate={{
            x: `calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 1.5}rem)`
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[calc(33.333%-1rem)] relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={image}
                alt={`Community presence ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
        </button>
      </div>

      {/* Play/Pause Button */}
      <div className="absolute bottom-4 right-4 pointer-events-auto">
        <button
          onClick={togglePlayPause}
          className="w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 hover:scale-110"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-gray-900 dark:text-white" />
          ) : (
            <Play className="w-5 h-5 text-gray-900 dark:text-white ml-0.5" />
          )}
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(images.length + index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              (currentIndex % images.length) === index
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
