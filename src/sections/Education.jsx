import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

const timeline = [
  {
    icon: <FaGraduationCap />,
    title: "B.Tech - Information Technology",
    place: "JSS Academy of Technical Education, Noida",
    year: "2022 - 2026",
    description:
      "Currently pursuing B.Tech in Information Technology with a strong focus on Full Stack Development, DSA and AI.",
    color: "text-violet-400",
  },

  {
    icon: <FaBriefcase />,
    title: "Operational Head",
    place: "Entrepreneurship Development Cell (EDC)",
    year: "2025 - 2026",
    description:
      "Managed technical events, coordinated teams and organized entrepreneurship activities.",
    color: "text-blue-400",
  },

  {
    icon: <FaCode />,
    title: "Technical Head",
    place: "Quizzoc Society",
    year: "2025 - 2026",
    description:
      "Led the technical team and managed website and event-related technical work.",
    color: "text-cyan-400",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="py-28 bg-[#030014] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-6xl font-extrabold
          bg-gradient-to-r
          from-violet-500
          via-blue-500
          to-cyan-400
          bg-clip-text
          text-transparent"
        >
          Education & Experience
        </motion.h2>

        <p className="text-center text-slate-400 mt-5 mb-20">
          My academic journey and leadership experience.
        </p>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 w-1 h-full bg-gradient-to-b from-violet-500 via-blue-500 to-cyan-400"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex gap-8 mb-16"
            >
              <div
                className={`w-10 h-10 rounded-full bg-[#12092d] border border-violet-500 flex items-center justify-center text-2xl ${item.color}`}
              >
                {item.icon}
              </div>

              <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-violet-500 transition duration-300">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-violet-300 mt-2">
                  {item.place}
                </p>

                <p className="text-slate-400 mt-2">
                  {item.year}
                </p>

                <p className="text-slate-300 mt-6 leading-8">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;