import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#030014] border-t border-white/10 py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}

          <div>

            <h2
              className="
              text-4xl
              font-extrabold
              bg-gradient-to-r
              from-violet-500
              via-blue-500
              to-cyan-400
              bg-clip-text
              text-transparent"
            >

              Aryan

            </h2>

            <p className="text-slate-400 mt-3">

              Software Engineer | Full Stack Developer

            </p>

          </div>

          {/* Social */}

          <div className="flex gap-6 text-3xl">

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

          </div>

        </div>

        <hr className="border-white/10 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-slate-400 flex items-center gap-2">

            Made with
            <FaHeart className="text-red-500" />
            by Aryan Aditya Bansal

          </p>

          <a
            href="#home"
            className="
            w-12
            h-12
            rounded-full
            flex
            items-center
            justify-center
            bg-gradient-to-r
            from-violet-600
            via-blue-500
            to-cyan-400
            hover:scale-110
            duration-300"
          >

            <FaArrowUp />

          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;