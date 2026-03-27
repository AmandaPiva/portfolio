export default function Header() {
  return (
    <header className="flex justify-center items-center flex-col p-8 mb-0">
      <div className="flex flex-col items-center gap-4 max-w-3xl text-center px-4">
        <img
          className="rounded-full w-[200px] h-[200px] object-cover"
          src="/perfil.jpeg"
          alt="perfil"
        />
        <h1 className="text-3xl mt-8 font-bold ml-4">
          Sejam bem vindos ao meu portifólio
        </h1>
        <h2 className="text-xl font-semibold">Desenvolvedora Full-Stack</h2>
        {/* <h2 className="bg-[#380710] text-white p-6 mt-4 rounded-lg shadow-lg">
          Olá, muito prazer em te conhecer! Meu nome é Amanda, sou uma
          desenvolvedora full-stack apaixonada por criar soluções inovadoras e
          impactantes. Com uma sólida experiência em desenvolvimento web, estou
          sempre em busca de desafios que me permitam crescer e aprender. Meu
          portfólio é uma coleção de projetos que refletem minha dedicação e
          conta um pouco da minha jornada como desenvolvedora. Cada projeto é
          uma oportunidade de demonstrar minha, criatividade e habilidades
          técnicas. Sinta-se à vontade para explorar meu trabalho e entrar em
          contato para discutir como posso contribuir para o sucesso do seu
          próximo projeto!
        </h2> */}
      </div>
    </header>
  );
}
