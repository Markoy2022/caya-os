import React from "react";
import { motion } from "framer-motion";
import resumePDF from "../assets/JCaya_Resume.pdf";

const Resume = () => {
  return (
    <section className="bg-[#030712] text-white px-6 py-24 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full space-y-8 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-emerald-200">documents</p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black"
          style={{ fontFamily: "satoshi-black" }}
        >
          Dive deeper into my process.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-slate-300 max-w-2xl mx-auto"
          style={{ fontFamily: "satoshi-medium" }}
        >
          The PDF includes recent collaborations, responsibilities, and highlights of how I approach each build from research to launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">resume & case study</p>
          <p className="text-2xl font-semibold">John Mark Caya</p>
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-full bg-emerald-400/90 px-8 py-3 text-stone-900 font-bold shadow-lg shadow-emerald-400/30 hover:translate-y-0.5 transition"
          >
            View Resume →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
