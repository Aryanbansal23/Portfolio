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
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 text-xl mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Aryan
            <br />
            <span className="text-cyan-400">
              Aditya Bansal
            </span>
          </h1>

          <div className="text-2xl mt-6 h-12">

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
              className="text-cyan-300 font-semibold"
            />

          </div>

          <p className="text-slate-400 mt-8 leading-8 text-lg">

            Passionate Software Developer with strong skills
            in React, Node.js, JavaScript, C++, MySQL,
            Data Structures & Algorithms and Generative AI.
            I enjoy building scalable applications and solving
            challenging problems.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#contact"
              className="bg-cyan-500 px-8 py-3 rounded-full hover:bg-cyan-600 transition"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-cyan-400 px-8 py-3 rounded-full flex items-center gap-2 hover:bg-cyan-500 transition"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-8 mt-10 text-3xl">

            <a
              href="https://github.com/Aryanbansal23"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/aryanadityabansal125"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:aryanbansal2338@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

            <img
              src="/profile.png"
              alt="Aryan"
              className="relative w-80 h-80 md:w-[430px] md:h-[430px] rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;