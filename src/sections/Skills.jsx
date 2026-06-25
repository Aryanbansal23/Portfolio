import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-[#07021A] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity:0,y:60 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
        >

          <h2
            className="
            text-5xl
            md:text-6xl
            font-extrabold
            text-center
            bg-gradient-to-r
            from-violet-500
            via-blue-500
            to-cyan-400
            bg-clip-text
            text-transparent"
          >

            Featured Projects

          </h2>

          <p className="text-center text-slate-400 mt-6 mb-16">

            Some projects I've built during my learning journey.

          </p>

        </motion.div>

        <div className="space-y-16">

          {projects.map((project,index)=>(

            <motion.div
              key={project.title}
              initial={{ opacity:0,y:60 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ delay:index*.2 }}
              viewport={{ once:true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500 duration-300 lg:grid lg:grid-cols-2"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              <div className="p-10">

                <h2 className="text-4xl font-bold">

                  {project.title}

                </h2>

                <p className="mt-6 text-slate-300 leading-8">

                  {project.description}

                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((tech)=>(

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-violet-500/20 text-violet-300"
                    >

                      {tech}

                    </span>

                  ))}

                </div>

                <div className="flex gap-5 mt-10">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 flex items-center gap-2 hover:scale-105 duration-300"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full border border-violet-500 flex items-center gap-2 hover:bg-white/5 duration-300"
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