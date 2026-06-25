import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="bg-[#020617] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-6xl font-bold text-center text-white">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Technologies & tools I use to build modern applications.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">

          {skills.map((category) => (

            <div
              key={category.title}
              className="rounded-3xl bg-slate-900 border border-slate-700 p-8 hover:border-cyan-400 transition-all duration-300"
            >

              <h3
                className={`text-3xl font-bold mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

                {category.skills.map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="bg-slate-800 rounded-2xl p-6 text-center hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                    >

                      <Icon
                        size={50}
                        color={item.color}
                        className="mx-auto"
                      />

                      <h4 className="mt-4 text-white font-semibold">
                        {item.name}
                      </h4>

                    </div>
                  );

                })}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;