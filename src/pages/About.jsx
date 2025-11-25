import React from "react";
import myImg from "../assets/caya.jpg";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Human friendly",
    desc: "Layouts that respond to intent, focusing on clarity, rhythm, and readability.",
  },
  {
    title: "Systems thinker",
    desc: "Design tokens and components that scale effortlessly across pages.",
  },
  {
    title: "Detail obsessed",
    desc: "From micro-interactions to typography, every decision has a reason.",
  },
];

const About = () => {
  return (
    <section className="bg-gradient-to-b from-[#050b16] to-[#0b1325] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[32px] bg-emerald-500/10 blur-3xl" />
          <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <img
              src={myImg}
              alt="John Mark Caya"
              className="w-full h-[28rem] object-cover rounded-[24px] border border-white/10"
            />
            <div className="mt-6 rounded-2xl bg-black/40 border border-white/5 p-5 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-200">currently learning</p>
              <p className="text-lg font-semibold text-white mt-2">Advanced motion design & Next.js</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">about</p>
          <h2 className="text-4xl font-black" style={{ fontFamily: "satoshi-black" }}>
            Hello, I’m John Mark Caya — a designer-developer translating emotion into digital form.
          </h2>
          <p className="text-slate-300 leading-relaxed">
            I specialize in crafting expressive interfaces using React, Tailwind, and animation libraries. My approach
            is rooted in understanding the story behind every product, then building a visual system that amplifies it.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Outside of design, music and gaming keep my curiosity alive—they influence the pacing, atmosphere, and
            mood of the experiences I create.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">{pillar.title}</p>
                <p className="text-slate-200 text-sm mt-2">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
