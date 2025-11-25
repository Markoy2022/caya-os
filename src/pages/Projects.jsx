import React from "react";
import { motion } from "framer-motion";
import ecBookstoreImg from "../assets/e-commerce.jpg";
import flowerShopImg from "../assets/react.png";

const projects = [
  {
    title: "E-Commerce Web App",
    description:
      "A React-driven bookstore with API powered catalog, advanced filtering, and polished micro-interactions that simulate a real storefront.",
    image: ecBookstoreImg,
    link: "https://github.com/Marvin777777/midterm-appsdev",
    tags: ["React", "API", "Tailwind"],
    role: "Lead Designer & Frontend",
  },
  {
    title: "Profile Card Component",
    description:
      "This React component is a sleek and interactive Profile Card designed to showcase a user’s basic information in a visually appealing way. It features a profile picture, name, and role or skills, with optional dynamic elements like animated text to highlight skills or interests. The card can be used in personal portfolios, team pages, or any app where user identity needs to be displayed. Built with React and enhanced with modern UI practices, it’s fully reusable, responsive, and easy to integrate into any project.",
    image: flowerShopImg,
    link: "https://github.com/Markoy2022/Markoy",
    tags: ["React", "Tailwind"],
    role: "Prototype",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#030712] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-emerald-200">selected work</p>
          <h2 className="text-4xl font-black" style={{ fontFamily: "satoshi-black" }}>
            Interfaces for brands, schools, and culture.
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Each build is treated like a mini product: research, mood boards, and a component system tailored to the story.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center rounded-[32px] border border-white/10 bg-white/5 p-6 lg:p-10 backdrop-blur"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" /> {project.role}
                </div>
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-emerald-200 hover:underline underline-offset-4"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  View project →
                </a>
              </div>
              <div className="rounded-[24px] overflow-hidden border border-white/10 shadow-2xl">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
