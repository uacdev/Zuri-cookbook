import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  value: string;
  duration?: number;
}

/**
 * A rapid count-up animation component that triggers when scrolled into view.
 * Handles numeric values with suffixes (e.g., "500+", "1M+").
 */
export const Counter = ({ value, duration = 1.5 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const match = value.match(/([\d.]+)(.*)/);
  const numericValue = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: duration,
        onUpdate(latest) {
          setCount(Math.floor(latest));
        },
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [numericValue, isInView, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};
