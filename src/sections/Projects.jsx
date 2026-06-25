import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Featured{" "}
          <span className="text-cyan-400">
            Projects
          </span>
        </motion.h2>

        <p className="text-center text-slate-400 mt-5 mb-16">
          Projects I've built while learning Full Stack Development.
        </p>

        <div className="space-y-14">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-700 lg:grid lg:grid-cols-2"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-5 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-5 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-cyan-500 transition px-6 py-3 rounded-xl"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;