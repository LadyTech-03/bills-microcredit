import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for actual page load (industry standard)
    const handleLoad = () => {
      setIsLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-topbar"
        >
          {/* Simple centered content */}
          <div className="flex flex-col items-center gap-6">
            {/* Logo with subtle animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-2xl"
            >
              <motion.img
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src="/logos/logo.png"
                alt="Bills Microcredit"
                className="w-32 h-32 object-contain"
              />
            </motion.div>

            {/* Simple spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
