import { motion } from "framer-motion";
import type { FC } from "react";

interface GoatEmojiProps {
  className?: string;
  size?: number;
}

export const GoatEmoji: FC<GoatEmojiProps> = ({ className = "", size = 24 }) => (
  <motion.div
    className={`inline-block animate-goat ${className}`.trim()}
    style={{ fontSize: size }}
    whileHover={{
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.3 }
    }}
  >
    🐐
  </motion.div>
);
