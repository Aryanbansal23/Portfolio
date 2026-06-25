import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#07021A] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

            Contact Me

          </h2>

          <p className="text-center text-slate-400 mt-5 mb-16">

            Let's build something amazing together.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
          >

            <h2 className="text-3xl font-bold">

              Get in Touch

            </h2>

           <p className="text-slate-300 mt-6 leading-8">

  I am actively seeking Software Engineer opportunities.
  If you're hiring or have an exciting opportunity, I'd
  love to connect and discuss how I can contribute to your
  team.

</p>

            <div className="space-y-6 mt-10">

              <div className="flex items-center gap-5">

                <FaEnvelope className="text-cyan-400 text-2xl"/>

                <span>

                  aryanbansal2338@gmail.com

                </span>

              </div>

              <div className="flex items-center gap-5">

                <FaPhoneAlt className="text-violet-400 text-2xl"/>

                <span>

                  +91 86506 63733

                </span>

              </div>

              <div className="flex items-center gap-5">

                <FaMapMarkerAlt className="text-blue-400 text-2xl"/>

                <span>

                  Noida, Uttar Pradesh

                </span>

              </div>

            </div>

            <div className="flex gap-8 mt-10 text-3xl">

              <a
                href="https://github.com/Aryanbansal23"
                target="_blank"
                rel="noreferrer"
                className="hover:text-violet-400 hover:scale-125 duration-300"
              >

                <FaGithub/>

              </a>

              <a
                href="https://linkedin.com/in/aryanadityabansal125"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 hover:scale-125 duration-300"
              >

                <FaLinkedin/>

              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity:0,x:60 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#12092d] rounded-xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#12092d] rounded-xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#12092d] rounded-xl px-5 py-4 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full bg-[#12092d] rounded-xl px-5 py-4 outline-none resize-none"
            ></textarea>

            <button
              className="
              w-full
              py-4
              rounded-xl
              font-semibold
              bg-gradient-to-r
              from-violet-600
              via-blue-500
              to-cyan-400
              hover:scale-105
              duration-300"
            >

              Send Message

            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;