import { Heart, Code, Lightbulb } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-12">Sobre mim</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-[#A1223C] rounded-full mb-4 mx-auto">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-white">
              Paixão
            </h3>
            <p className="text-center text-gray-200">
              Apaixonada por criar soluções inovadoras e impactantes no
              desenvolvimento web.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-[#A1223C] rounded-full mb-4 mx-auto">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-white">
              Experiência
            </h3>
            <p className="text-center text-gray-200">
              Sólida experiência em desenvolvimento full-stack, sempre buscando
              novos desafios.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-[#A1223C] rounded-full mb-4 mx-auto">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-white">
              Criatividade
            </h3>
            <p className="text-center text-gray-200">
              Cada projeto reflete minha dedicação e habilidades técnicas
              únicas.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Sinta-se à vontade para explorar meu trabalho e entrar em contato
            para discutir como posso contribuir para o sucesso do seu próximo
            projeto!
          </p>
        </div>
      </div>
    </div>
  );
}
