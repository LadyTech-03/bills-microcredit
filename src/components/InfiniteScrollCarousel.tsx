import { motion } from "framer-motion";

interface InfiniteScrollCarouselProps {
  images: string[];
  speed?: number; // Duration in seconds for one complete scroll
}

const InfiniteScrollCarousel = ({ images, speed = 30 }: InfiniteScrollCarouselProps) => {
  // Duplicate images multiple times for seamless infinite scroll
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -100 * (images.length / 3) + "%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] h-[300px] relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={image}
              alt={`Moment ${(index % images.length) + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollCarousel;
