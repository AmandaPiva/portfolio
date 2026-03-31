export default function Header() {
  return (
    <header className="flex justify-center items-center flex-col p-8 mb-0">
      <div className="flex flex-col items-center gap-4 max-w-3xl text-center px-4 mt-12">
        <img
          className="rounded-full w-[200px] h-[200px] object-cover"
          src="/perfil-fundo.png"
          alt="perfil"
        />
        <h1 className="text-3xl mt-8 font-bold ml-4">
          Sejam bem vindos ao meu portifólio
        </h1>
        <h2 className="text-xl font-semibold">Desenvolvedora Full-Stack</h2>
      </div>
    </header>
  );
}
