export default function Stacks() {
  const stacks = [
    {
      name: ".NET",
      icon: (
        <svg
          className="w-20 h-20 cursor-pointer"
          width="456"
          height="456"
          viewBox="0 0 456 456"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="456" height="456" fill="#512BD4" />
          <path
            d="M81.2738 291.333C78.0496 291.333 75.309 290.259 73.052 288.11C70.795 285.906 69.6665 283.289 69.6665 280.259C69.6665 277.173 70.795 274.529 73.052 272.325C75.309 270.121 78.0496 269.019 81.2738 269.019C84.5518 269.019 87.3193 270.121 89.5763 272.325C91.887 274.529 93.0424 277.173 93.0424 280.259C93.0424 283.289 91.887 285.906 89.5763 288.11C87.3193 290.259 84.5518 291.333 81.2738 291.333Z"
            fill="white"
          />
          <path
            d="M210.167 289.515H189.209L133.994 202.406C132.597 200.202 131.441 197.915 130.528 195.546H130.044C130.474 198.081 130.689 203.508 130.689 211.827V289.515H112.149V171H134.477L187.839 256.043C190.096 259.57 191.547 261.994 192.192 263.316H192.514C191.977 260.176 191.708 254.859 191.708 247.365V171H210.167V289.515Z"
            fill="white"
          />
          <path
            d="M300.449 289.515H235.561V171H297.87V187.695H254.746V221.249H294.485V237.861H254.746V272.903H300.449V289.515Z"
            fill="white"
          />
          <path
            d="M392.667 187.695H359.457V289.515H340.272V187.695H307.143V171H392.667V187.695Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "React",
      icon: (
        <img
          src="/react.png"
          alt="React"
          className="w-20 h-20 cursor-pointer"
        />
      ),
    },
    {
      name: "Next.js",
      icon: (
        <img
          src="/nextjs-logo.png"
          alt="Next.js"
          className="w-20 h-20 cursor-pointer"
        />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <img
          src="/typescript-logo.png"
          alt="TypeScript"
          className="w-20 h-20 cursor-pointer"
        />
      ),
    },
  ];

  const databases = [
    {
      name: "SQL Server",
      icon: (
        <img
          src="/sqlServer.png"
          alt="SQL Server"
          className="w-20 h-20 cursor-pointer"
        />
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <img
          src="/postgresql.png"
          alt="PostgreSQL"
          className="w-20 h-20 cursor-pointer"
        />
      ),
    },
    {
      name: "Mysql",
      icon: (
        <img
          src="/mysql.png"
          alt="Mysql"
          className="w-25 h-20 cursor-pointer"
        />
      ),
    },
  ];

  const otherTechnologies = [
    {
      name: "Docker",
      icon: (
        <img
          src="/docker-icon.png"
          alt="Docker"
          className="w-25 h-20 cursor-pointer"
        />
      ),
    },
    {
      name: "Git",
      icon: (
        <img src="/git.png" alt="Git" className="w-25 h-20 cursor-pointer" />
      ),
    },
    {
      name: "Azure",
      icon: (
        <img
          src="/Azure.png"
          alt="Azure"
          className="w-30 h-20 cursor-pointer"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-transparent to-[#44031A]/5 mt-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#70052B]">
          Minhas Tecnologias
        </h1>
        <p className="text-center text-gray-300 mb-16 text-lg">
          Um panorama completo das ferramentas e tecnologias que utilizo
        </p>

        {/* Principais Stacks */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#44031A] to-transparent w-32"></div>
            <h2 className="text-3xl font-bold text-white mx-4">
              Stacks Principais
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-[#44031A] to-transparent w-32"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stacks.map((stack) => (
              <div
                key={stack.name}
                className="group relative overflow-hidden rounded-xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#44031A]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#44031A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {stack.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center group-hover:text-[#44031A] transition-colors">
                    {stack.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bancos de Dados */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#44031A] to-transparent w-32"></div>
            <h2 className="text-3xl font-bold text-white mx-4">
              Bancos de Dados
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-[#44031A] to-transparent w-32"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {databases.map((database) => (
              <div
                key={database.name}
                className="group relative overflow-hidden rounded-xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#44031A]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#44031A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {database.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center group-hover:text-[#44031A] transition-colors">
                    {database.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outras Tecnologias */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#44031A] to-transparent w-32"></div>
            <h2 className="text-3xl font-bold text-white mx-4">
              Outras Tecnologias
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-[#44031A] to-transparent w-32"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {otherTechnologies.map((tech) => (
              <div
                key={tech.name}
                className="group relative overflow-hidden rounded-xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#44031A]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#44031A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center group-hover:text-[#44031A] transition-colors">
                    {tech.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
