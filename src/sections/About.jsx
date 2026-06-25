import { motion } from "framer-motion";
import {
  FaCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCode />,
    number: "300+",
    title: "DSA Problems",
  },
  {
    icon: <FaProjectDiagram />,
    number: "2+",
    title: "Projects",
  },
  {
    icon: <FaGraduationCap />,
    number: "7.7",
    title: "CGPA",
  },
  {
    icon: <FaUsers />,
    number: "2",
    title: "Leadership Roles",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-center text-slate-400 mt-6 max-w-3xl mx-auto">
            Passionate Software Developer pursuing B.Tech in
            Information Technology at JSS Academy of Technical
            Education, Noida.
            I enjoy building scalable web applications and solving
            challenging algorithmic problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center mt-20">

          <motion.div
            initial={{ opacity:0,x:-80 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
          >

            <img
              src="/profile.png"
              className="rounded-3xl border-2 border-cyan-400"
              alt="profile"
            />

          </motion.div>

          <motion.div
            initial={{ opacity:0,x:80 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
          >

            <h3 className="text-3xl font-bold">
              Software Engineer
            </h3>

            <p className="text-slate-400 mt-6 leading-8">
              I'm passionate about creating clean,
              scalable and user-friendly applications.
              My interests include Full Stack Development,
              Data Structures & Algorithms,
              Backend Development,
              and Generative AI.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400">Name</h4>
                <p>Aryan Aditya Bansal</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400">Email</h4>
                <p className="break-all">
                  aryanbansal2338@gmail.com
                </p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400">Education</h4>
                <p>B.Tech IT</p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-cyan-400">Location</h4>
                <p>Noida, India</p>
              </div>

            </div>

          </motion.div>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-24">

          {stats.map((item,index)=>(

            <motion.div
              key={index}
              initial={{ opacity:0,y:60 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ delay:index*.2 }}
              viewport={{ once:true }}
              className="bg-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition"
            >

              <div className="text-cyan-400 text-5xl flex justify-center">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold mt-5">
                {item.number}
              </h2>

              <p className="text-slate-400 mt-3">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default About;