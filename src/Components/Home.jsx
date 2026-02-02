import "./index.css";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">
      <div className="max-w-4xl text-center">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Hi, I’m <span className="text-indigo-400">Aswin</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-xl md:text-2xl text-gray-300"
        >
          Full Stack Developer • Software Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 text-gray-400 leading-relaxed"
        >
          I build fast, scalable, and user-friendly web applications using
          modern technologies. Passionate about clean code, performance,
          and real-world problem solving.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-medium"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-gray-500 hover:border-indigo-400 transition font-medium"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  );
}

