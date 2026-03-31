import { ExternalLink, GitBranch, Eye } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestão Empresarial",
      description:
        "Aplicação completa para gestão de empresas com dashboard administrativo, controle de estoque e relatórios financeiros.",
      technologies: [".NET", "React", "SQL Server", "TypeScript"],
      githubUrl: "https://github.com/AmandaPiva/sistema-gestao-empresarial",
      liveUrl: "https://sistema-gestao-empresarial.vercel.app",
      image: "/project1.png",
      featured: true,
    },
    {
      id: 2,
      title: "E-commerce Moderno",
      description:
        "Plataforma de e-commerce completa com carrinho de compras, sistema de pagamentos e painel administrativo.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/AmandaPiva/ecommerce-moderno",
      liveUrl: "https://ecommerce-moderno.vercel.app",
      image: "/project2.png",
      featured: true,
    },
    {
      id: 3,
      title: "API de Gerenciamento de Tarefas",
      description:
        "API RESTful para gerenciamento de tarefas com autenticação JWT, documentação Swagger e testes automatizados.",
      technologies: [".NET Core", "Entity Framework", "SQL Server", "JWT"],
      githubUrl: "https://github.com/AmandaPiva/api-tarefas",
      liveUrl: null,
      image: "/project3.png",
      featured: false,
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description:
        "Dashboard interativo com gráficos e métricas em tempo real para análise de dados empresariais.",
      technologies: ["React", "TypeScript", "Chart.js", "Node.js"],
      githubUrl: "https://github.com/AmandaPiva/dashboard-analytics",
      liveUrl: "https://dashboard-analytics.vercel.app",
      image: "/project4.png",
      featured: false,
    },
    {
      id: 5,
      title: "Sistema de Reservas",
      description:
        "Aplicação para reserva de salas e recursos empresariais com calendário integrado e notificações.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
      githubUrl: "https://github.com/AmandaPiva/sistema-reservas",
      liveUrl: "https://sistema-reservas.vercel.app",
      image: "/project5.png",
      featured: false,
    },
    {
      id: 6,
      title: "Blog Pessoal",
      description:
        "Blog moderno com sistema de posts, comentários e painel administrativo para gerenciamento de conteúdo.",
      technologies: ["Next.js", "Markdown", "Vercel", "Tailwind"],
      githubUrl: "https://github.com/AmandaPiva/blog-pessoal",
      liveUrl: "https://blog-pessoal.vercel.app",
      image: "/project6.png",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-transparent to-[#A1223C]/5 mt-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#70052B]">
            Meus Projetos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma coleção dos meus trabalhos mais recentes, demonstrando
            habilidades em desenvolvimento full-stack e soluções inovadoras para
            problemas reais.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-[#A1223C] to-transparent w-32"></div>
            <h2 className="text-3xl font-bold text-white mx-4">
              Projetos em Destaque
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-[#A1223C] to-transparent w-32"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#A1223C]/50 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A1223C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-[#A1223C] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Destaque
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#A1223C] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#A1223C]/20 text-[#A1223C] px-3 py-1 rounded-full text-sm font-medium border border-[#A1223C]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors group/link"
                    >
                      <GitBranch className="w-4 h-4" />
                      <span>Código</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#A1223C] hover:bg-[#8B1A2F] text-white px-4 py-2 rounded-lg transition-colors group/link"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-[#A1223C] to-transparent w-32"></div>
            <h2 className="text-3xl font-bold text-white mx-4">
              Outros Projetos
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-[#A1223C] to-transparent w-32"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#A1223C]/50 transition-all duration-300 hover:shadow-xl"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A1223C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Project Image */}
                <div className="relative h-32 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#A1223C] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#A1223C]/20 text-[#A1223C] px-2 py-1 rounded-full text-xs font-medium border border-[#A1223C]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded text-sm transition-colors"
                    >
                      <GitBranch className="w-3 h-3" />
                      <span>Código</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-[#A1223C] hover:bg-[#8B1A2F] text-white px-3 py-1.5 rounded text-sm transition-colors"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Quer ver mais projetos ou discutir uma colaboração?
          </p>
          <a
            href="https://github.com/AmandaPiva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#A1223C] hover:bg-[#8B1A2F] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <GitBranch className="w-5 h-5" />
            Ver Todos os Projetos no GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
