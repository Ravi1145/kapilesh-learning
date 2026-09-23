import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { fadeUp, stagger, viewport } from "../lib/motion";

/**
 * Accessible FAQ list using native <details>/<summary> disclosure —
 * no extra JS state needed, keyboard- and screen-reader-friendly.
 */
export default function FAQ({ items }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="divide-y divide-line border-y border-line"
    >
      {items.map((item) => (
        <motion.details
          key={item.question}
          variants={fadeUp}
          className="group py-6"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-lg tracking-tight text-navy sm:text-xl">
            {item.question}
            <Plus
              size={18}
              className="mt-1 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mist">
            {item.answer}
          </p>
        </motion.details>
      ))}
    </motion.div>
  );
}
