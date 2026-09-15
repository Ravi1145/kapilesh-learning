import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";
import brandPoster from "../assets/kapilesh-brand-poster.jpg";

/**
 * Showcases the official Kapilesh Learning Solutions brand poster —
 * approved logo, tagline and promise, presented as-is rather than
 * re-typeset, so the real brand identity speaks for itself.
 */
export default function BrandPromise() {
  return (
    <section className="bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow text-deep">
            Our Promise
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="relative mx-auto mt-10 overflow-hidden border border-line shadow-[0_30px_80px_-40px_rgba(7,24,39,0.35)]"
          >
            <img
              src={brandPoster}
              alt="Kapilesh Learning Solutions — People, Leadership, Growth. Learn, Reflect, Apply, Grow. Inspire, Develop, Transform: building better people for a brighter tomorrow."
              loading="lazy"
              className="w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
