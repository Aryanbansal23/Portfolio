import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";

function About() {
  const stats = [
    {
      icon: <FaCode />,
      number: "300+",
      title: "DSA Problems",
    },
    {
      icon: <FaProjectDiagram />,
      number: "5+",
      title: "Projects",
    },
    {
      icon: <FaUserGraduate />,
      number: "7.7",
      title: "CGPA",
    },
    {
      icon: <FaLaptopCode />,
      number: "2026",
      title: "Graduate",
    },
  ];

  return (
    <section
      id="about"
      className="py-28 bg-[#07021A] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

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
            About Me
          </h2>

          <p className="text-center text-slate-400 mt-6 max-w-3xl mx-auto text-lg">

            Passionate Software Engineer focused on building
            scalable web applications and solving real-world
            problems using modern technologies.

          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 blur-[120px] opacity-40"></div>

              <img
                src="/profile.png"
                alt="Aryan"
                className="relative w-80 h-80 md:w-[430px] md:h-[430px]
                rounded-3xl object-cover border-4 border-violet-500"
              />

            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-4xl font-bold">

              Software Engineer

            </h3>

            <p className="text-slate-300 mt-8 leading-8">

              I'm Aryan Aditya Bansal, a B.Tech Information
              Technology student at JSS Academy of Technical
              Education, Noida.

              I enjoy developing modern web applications,
              learning new technologies, solving DSA problems,
              and creating projects that solve real-world
              problems.

            </p>

            {/* Info */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

                <h4 className="text-violet-400">
                  Name
                </h4>

                <p className="mt-2">
                  Aryan Aditya Bansal
                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

                <h4 className="text-blue-400">
                  Email
                </h4>

                <p className="mt-2 break-all">
                  aryanbansal2338@gmail.com
                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

                <h4 className="text-cyan-400">
                  Education
                </h4>

                <p className="mt-2">
                  B.Tech (IT)
                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

                <h4 className="text-pink-400">
                  Location
                </h4>

                <p className="mt-2">
                  Noida, India
                </p>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-8 mt-24">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              text-center
              hover:scale-105
              hover:border-violet-500
              duration-300"
            >

              <div className="text-5xl text-violet-400 flex justify-center">

                {item.icon}

              </div>

              <h2 className="text-4xl font-bold mt-6">

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