import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-[#030014] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2
            className="text-5xl md:text-6xl font-extrabold text-center
            bg-gradient-to-r
            from-violet-500
            via-blue-500
            to-cyan-400
            bg-clip-text
            text-transparent"
          >
            My Skills
          </h2>

          <p className="text-center text-slate-400 mt-6 mb-16">
            Technologies and tools I use every day.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {skills.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-violet-500 duration-300"
            >

              <h3 className="text-3xl font-bold mb-8 text-violet-400">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

                {category.skills.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.name}
                      className="bg-[#12092d] rounded-2xl p-6 text-center
                      hover:scale-110 hover:-translate-y-2
                      hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]
                      transition-all duration-300"
                    >

                      <Icon
                        size={50}
                        color={item.color}
                        className="mx-auto"
                      />

                      <h4 className="mt-4 font-semibold">
                        {item.name}
                      </h4>

                    </div>

                  );

                })}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;