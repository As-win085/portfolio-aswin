import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectSlider = ({ projects, accent }) => {
  const [index, setIndex] = useState(0);

  const paginate = (dir) => {
    setIndex((prev) => (prev + dir + projects.length) % projects.length);
  };

  return (
    <div
      className={`relative w-[92%] max-w-6xl mx-auto rounded-3xl 
      p-6 sm:p-8 md:p-10
      bg-gradient-to-br ${projects[index].background}
      backdrop-blur-xl border border-white/10
      shadow-[0_40px_120px_rgba(0,0,0,0.6)]`}
    >
      {/* Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 
        text-white/70 hover:text-white transition z-20"
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 
        text-white/70 hover:text-white transition z-20"
      >
        <FaChevronRight size={24} />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* DESKTOP IMAGE */}
        <div className="relative h-[360px] hidden md:flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={projects[index].img}
              alt={projects[index].name}
              initial={{ scale: 0.7, opacity: 0, rotateY: 40 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotateY: -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute max-h-full"
              style={{
                filter: `drop-shadow(0 40px 80px ${accent})`,
              }}
            />
          </AnimatePresence>
        </div>

        {/* INFO */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-lg 
            p-5 sm:p-6 rounded-2xl
            border border-white/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {projects[index].name}
            </h2>

            <ul className="space-y-2 text-sm sm:text-base text-white/80 md:text-left">
              {projects[index].description.map((d, i) => (
                <li key={i}>• {d}</li>
              ))}
            </ul>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-4">
              {projects[index].techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs sm:text-sm rounded-full
                  bg-white/10 border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* MOBILE IMAGE */}
            <motion.img
              src={projects[index].img}
              alt={projects[index].name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="md:hidden mt-6 mx-auto w-40 sm:w-52"
              style={{
                filter: `drop-shadow(0 20px 40px ${accent})`,
              }}
            />

            {/* BUTTON */}
            <Link
              to={projects[index].gitRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2
              rounded-full border border-white/20
              text-sm sm:text-base
              hover:bg-white/10 transition"
            >
              <FaGithub /> View Code
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectSlider;
