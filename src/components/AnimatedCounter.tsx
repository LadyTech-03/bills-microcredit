import { useRef, useEffect } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "", className = "" }: { value: number; suffix?: string; className?: string }) => {
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

  return <div ref={ref} className={`text-4xl font-black text-gray-900 dark:text-white ${className}`} />;
};

export default AnimatedCounter;
