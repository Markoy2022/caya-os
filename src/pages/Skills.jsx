import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { RiPagesLine } from "react-icons/ri";
import { GrOptimize } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa";

const skillset = [
  { name: "React", detail: "Hooks, state machines, and reusable patterns", level: 0.92, accent: "from-emerald-300 to-emerald-500", icon: <FaReact /> },
  { name: "Tailwind CSS", detail: "Design tokens + responsive systems", level: 0.9, accent: "from-sky-300 to-blue-500", icon: <SiTailwindcss /> },
  { name: "JavaScript", detail: "Modern ES features and app logic", level: 0.88, accent: "from-amber-300 to-orange-500", icon: <FaJs /> },
  { name: "HTML & CSS", detail: "Semantic structure + fluid layouts", level: 0.95, accent: "from-pink-300 to-red-400", icon: <FaHtml5 /> },
  { name: "Git / Versioning", detail: "Clean commits & collaborative flow", level: 0.82, accent: "from-violet-300 to-purple-500", icon: <FaGitAlt /> },
  { name: "Vite Tooling", detail: "Fast builds, DX optimizations", level: 0.8, accent: "from-fuchsia-300 to-indigo-500", icon: <SiVite /> },
];

const services = [
  {
    icon: <CgWebsite className="text-3xl text-emerald-300" />,
    title: "Brand Sites",
    description: "Art-directed marketing pages with scroll choreography.",
  },
  {
    icon: <RiPagesLine className="text-3xl text-amber-300" />,
    title: "Single Page Apps",
    description: "Reactive routing, state management, and polished flows.",
  },
  {
    icon: <GrOptimize className="text-3xl text-sky-300" />,
    title: "Site Refresh & Optimization",
    description: "Refine performance, accessibility, and visual cohesion.",
  },
  {
    icon: <FaFilePdf className="text-3xl text-rose-300" />,
    title: "Resume & Case Studies",
    description: "Detailed look at my process and recent deliveries.",
    resume: true,
  },
];

const iconGrid = [
  { icon: <FaHtml5 className="text-3xl text-orange-400" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-3xl text-blue-400" />, label: "CSS" },
  { icon: <FaJs className="text-3xl text-yellow-400" />, label: "JS" },
  { icon: <FaReact className="text-3xl text-cyan-300" />, label: "React" },
  { icon: <SiTailwindcss className="text-3xl text-sky-400" />, label: "Tailwind" },
  { icon: <FaGitAlt className="text-3xl text-orange-500" />, label: "Git" },
  { icon: <SiVite className="text-3xl text-purple-400" />, label: "Vite" },
];

const Skills = () => {
  return (
    <>
      <section className="bg-[#030712] text-white px-6 py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-emerald-200">capabilities</p>
            <h2 className="text-4xl font-black" style={{ fontFamily: "satoshi-black" }}>
              A design-minded stack for expressive frontends.
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              My toolkit blends creative direction with reliable engineering. Each layer is tuned for purposeful motion, accessibility, and fast iteration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillset.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-lg font-semibold">{skill.name}</p>
                    <p className="text-sm text-slate-300">{skill.detail}</p>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-black/30 flex items-center justify-center text-2xl">
                    {skill.icon}
                  </div>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.accent}`}
                    style={{ width: `${skill.level * 100}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-4">
              {iconGrid.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 text-sm text-slate-300">
                  <div className="h-16 w-16 rounded-2xl bg-black/40 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050b16] text-white px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-emerald-200">services</p>
              <h3 className="text-3xl font-black mt-3" style={{ fontFamily: "satoshi-black" }}>
                How I collaborate
              </h3>
            </div>
            <p className="text-slate-300 max-w-2xl">
              From zero-to-one launches to redesigns, I move between art direction, UX, and engineering to deliver cohesive web experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between"
              >
                <div className="inline-flex mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
                <p className="text-slate-300 mt-3 text-sm flex-1">{service.description}</p>
                {service.resume && (
                  <Link
                    to="/resume"
                    className="mt-4 inline-flex items-center text-emerald-200 text-sm hover:underline underline-offset-4"
                    style={{ fontFamily: "satoshi-bold" }}
                  >
                    View Resume →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
