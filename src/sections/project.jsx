import { useState } from "react";
import ProjectSlider from "../components/projectSlider";
import {
  softwareProjects,
  dataScienceProjects,
} from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [category, setCategory] = useState("software");

  const isSoftware = category === "software";

  return (
    <div className="min-h-screen bg-black text-white py-20">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-5xl font-bold mb-14"
      >
        Featured Projects
      </motion.h1>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-16">
        <button
          onClick={() => setCategory("software")}
          className={`px-8 py-3 rounded-full font-semibold transition
          ${
            isSoftware
              ? "bg-orange-500/20 text-orange-400 shadow-[0_0_30px_rgba(255,122,24,0.6)]"
              : "bg-white/5 text-white/60"
          }`}
        >
          Software Development
        </button>

        <button
          onClick={() => setCategory("data")}
          className={`px-8 py-3 rounded-full font-semibold transition
          ${
            !isSoftware
              ? "bg-blue-500/20 text-blue-400 shadow-[0_0_30px_rgba(79,172,254,0.6)]"
              : "bg-white/5 text-white/60"
          }`}
        >
          Data Science
        </button>
      </div>

      {/* Slider */}
      <ProjectSlider
        projects={isSoftware ? softwareProjects : dataScienceProjects}
        accent={isSoftware ? "rgba(255,122,24,0.6)" : "rgba(79,172,254,0.6)"}
      />
    </div>
  );
};

export default Projects;
