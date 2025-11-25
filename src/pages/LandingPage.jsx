import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/caya.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaLaptopCode } from "react-icons/fa";
import { MdStyle } from "react-icons/md";
import { TbComponents } from "react-icons/tb";
import { motion } from "framer-motion";

const highlightCards = [
  {
    icon: <FaLaptopCode className="text-4xl text-emerald-300" />,
    title: "Experience Design",
    copy: "Interfaces that balance story, hierarchy, and clarity across form factors.",
  },
  {
    icon: <MdStyle className="text-4xl text-amber-300" />,
    title: "Visual Systems",
    copy: "Reusable design tokens and components for fast iterations and consistent visuals.",
  },
  {
    icon: <TbComponents className="text-4xl text-sky-300" />,
    title: "React Engineering",
    copy: "Composable architecture using React, Vite, and Tailwind with motion states.",
  },
];

const LandingPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#030712] text-slate-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -left-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute top-40 right-0 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-16 px-6 lg:px-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="uppercase text-xs tracking-[0.5em] text-emerald-300">
              creative frontend
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight" style={{ fontFamily: "satoshi-black" }}>
              Design-forward experiences built with thoughtful code.
            </h1>
            <div className="text-2xl md:text-3xl text-emerald-200 font-semibold">
              <TypeAnimation
                sequence={[
                  "React Interfaces",
                  2000,
                  "Motion-first Layouts",
                  2000,
                  "Premium Web Presence",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-base md:text-lg text-slate-300 max-w-xl">
              Hello, I'm John Mark Caya. I blend storytelling, typography, and smooth interactions to translate ideas into digital
              experiences that feel purposeful and refined.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 rounded-full bg-emerald-400/90 text-stone-950 font-semibold shadow-lg shadow-emerald-400/40 hover:translate-y-0.5 transition"
              >
                View Projects
              </Link>
              <Link
                to="/skills"
                className="px-6 py-3 rounded-full border border-emerald-200 text-emerald-100 hover:bg-white/10 transition"
              >
                Explore Capabilities
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {[
                { label: "Years Crafting", value: "3+" },
                { label: "Projects Delivered", value: "2" },
                { label: "Focus", value: "React & UI" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-900/40 to-slate-950/80 p-8 shadow-2xl backdrop-blur">
              <div className="rounded-3xl bg-slate-900/40 p-6 border border-white/5">
                <img
                  src={profileImg}
                  alt="John Mark Caya"
                  className="w-full h-80 object-cover rounded-3xl border border-white/10"
                />
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p className="flex items-center justify-between">
                  <span>Available for freelance</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </p>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">currently crafting</p>
                  <p className="text-lg font-semibold text-white mt-2">Interactive Design Systems</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#050b16] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">what I shape</p>
              <h2 className="text-4xl font-black mt-2" style={{ fontFamily: "satoshi-black" }}>
                Systems, surfaces, and stories for humans.
              </h2>
            </div>
            <p className="text-slate-300 lg:max-w-xl">
              From concept to polished delivery, I orchestrate layout, micro-interactions, and code quality so every surface
              feels intentional and responsive.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {highlightCards.map((card) => (
              <motion.div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:-translate-y-1 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-black/30 p-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="text-slate-300 mt-3">{card.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
