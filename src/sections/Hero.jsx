import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030014] text-white flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-violet-600 opacity-20 blur-[120px]" />

        <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-[150px]" />

        <div className="absolute bottom-10 left-1/2 w-72 h-72 rounded-full bg-cyan-400 opacity-20 blur-[120px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-violet-400 text-xl font-medium mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            Aryan

            <br />

            <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">

              Aditya Bansal

            </span>

          </h1>

          <div className="text-2xl mt-8 h-12">

            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "Competitive Programmer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
            />

          </div>

          <p className="text-slate-300 mt-8 leading-8 text-lg max-w-xl">

            Passionate Software Developer skilled in React,
            Node.js, JavaScript, C++, MySQL,
            Data Structures & Algorithms and Generative AI.

            I enjoy building scalable applications and solving
            real-world problems.

          </p>

          {/* Buttons */}

          <div className="flex gap-5 mt-10 flex-wrap">

            <a
              href="#contact"
              className="px-8 py-3 rounded-full
              bg-gradient-to-r
              from-violet-600
              via-blue-500
              to-cyan-400
              font-semibold
              hover:scale-105
              duration-300
              shadow-xl
              hover:shadow-violet-500/40"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-full
              border border-violet-500
              hover:border-cyan-400
              hover:bg-white/5
              flex items-center gap-2
              duration-300"
            >
              <FaDownload />

              Resume

            </a>

          </div>

          {/* Social */}

          <div className="flex gap-8 mt-10 text-3xl">

            <a
              href="https://github.com/Aryanbansal23"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400 hover:scale-125 duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/aryanadityabansal125"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 hover:scale-125 duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:aryanbansal2338@gmail.com"
              className="hover:text-cyan-400 hover:scale-125 duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 blur-[120px] opacity-40 animate-pulse"></div>

            <img
              src="/profile.png"
              alt="Aryan"
              className="relative
              w-80
              h-80
              md:w-[430px]
              md:h-[430px]
              rounded-full
              object-cover
              border-4
              border-violet-500
              shadow-2xl
              hover:scale-105
              duration-500"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;