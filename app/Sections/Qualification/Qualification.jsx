"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FloatingShapes } from "../../components/legacy/3d";

const Qualification = () => {
  const router = useRouter();
  return (
    <section id="qualification" className="relative pb-24 overflow-hidden" style={{ background: 'var(--bgSecondary)' }}>
      <FloatingShapes preset="sparse" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main-heading">
            <span>Qualification</span>
          </h2>
        </motion.div>
        
        <div className="max-w-3xl mx-auto px-6">
          <motion.article
            className="p-8 md:p-12 glass-card text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-[17px] leading-[1.8] mb-5 font-medium" style={{ color: 'var(--textMuted)' }}>
              A highly skilled <span className="font-bold" style={{ color: 'var(--textColor)' }}>Mid-Level Frontend Developer</span> specialized in 
              building fast, scalable, and high-performance web applications. 
              Strong expertise in <span className="font-bold" style={{ color: 'var(--textColor)' }}>React.js, Next.js, and TypeScript</span>, 
              with a solid focus on frontend architecture, reusable component systems, and performance optimization. 
              Proven ability to deliver production-ready systems, including ERP platforms and real-world business solutions.
            </p>

            <p className="text-[17px] leading-[1.8] mb-10 font-medium" style={{ color: 'var(--textMuted)' }}>
              Focused on  building ERP systems, booking platforms, and scalable business applications, delivering high-performance, user-friendly, and production-ready solutions.
            </p>
            <button 
              className="custom-button !text-white !border-none !mx-auto shadow-lg shadow-amber-600/20" 
              style={{ background: 'var(--gradient)' }}
              onClick={() => router.push("/About")}
            >
              Learn More About Me
            </button>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
