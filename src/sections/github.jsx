import { motion } from "framer-motion";

function Github() {
  return (
    <section
      id="github"
      className="py-28 bg-[#030014] text-white"
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
            GitHub Statistics
          </h2>

          <p className="text-center text-slate-400 mt-5 mb-16">
            My GitHub activity and coding contributions.
          </p>

        </motion.div>

        <div className="space-y-10">

          {/* GitHub Stats */}

          <img
            src="https://github-readme-stats.vercel.app/api?username=Aryanbansal23&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub Stats"
            className="mx-auto rounded-3xl"
          />

          {/* Streak */}

          <img
            src="https://streak-stats.demolab.com?user=Aryanbansal23&theme=tokyonight&hide_border=true"
            alt="GitHub Streak"
            className="mx-auto rounded-3xl"
          />

          {/* Languages */}

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aryanbansal23&layout=compact&theme=tokyonight&hide_border=true"
            alt="Languages"
            className="mx-auto rounded-3xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Github;