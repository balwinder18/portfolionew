// components/FadeInSection.jsx
import { motion } from "framer-motion";

export default function FadeInSection({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

