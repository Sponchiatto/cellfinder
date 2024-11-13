export default function Header() {
  return (

    <div className="w-screen bg-gradient-to-b from-stone-800 to-stone-900 shadow-2xl border-b border-yellow-900">

      <header className="text-center py-8 max-w-screen-lg mx-auto">

        <h1 className="text-5xl font-extrabold text-yellow-300 drop-shadow-lg tracking-wide">
          CellFinder
        </h1>

        <p className="mt-4 text-xl text-yellow-200">
          Encontrou! Com CellFinder, você nunca mais vai perder seu celular.
          Tecnologia inovadora que localiza seu dispositivo de formas
          inesperadas.
        </p>
      </header>
    </div>
  );
}
