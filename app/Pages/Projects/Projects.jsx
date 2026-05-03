"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { data } from "../../constants";
import { ParticleField } from "../../components/legacy/3d";

const projects = data.projects;

const Projects = () => {
  return (
    <section className="relative pb-24 pt-40 overflow-hidden min-h-screen">
      <ParticleField />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main-heading">
            My <span>Projects</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`glass-card project-card overflow-hidden group cursor-pointer ${
                    project.featured ? "border-[var(--mainColor)] border-opacity-30" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                     {project.featured && (
                      <div className="absolute top-3 right-3 z-10 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-white shadow-lg flex items-center gap-1.5" style={{ background: 'var(--gradient)' }}>
                        <FaExternalLinkAlt size={10} /> Featured
                      </div>
                    )}
                    <div className="w-full h-full relative">
                        <Image
                        src={project.img}
                        alt={project.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 shadow-xl"
                          style={{ background: 'var(--glassBg)', backdropFilter: 'var(--glassBlur)', border: 'var(--glassBorder)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--mainColor)')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--glassBg)')}
                        >
                          <FaExternalLinkAlt size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--fontDisplay)', color: 'var(--textColor)' }}>
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech && project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border"
                          style={{
                            background: 'rgba(200, 162, 90, 0.08)',
                            borderColor: 'var(--borderColor)',
                            color: 'var(--textMuted)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
