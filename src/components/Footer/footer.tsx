export default function Footer() {
  return (
    // Seção do rodapé com fundo gradiente indo de cinza para preto, sombra e borda superior
    <footer className="w-screen bg-gradient-to-t from-stone-800 to-stone-900 shadow-2xl border-t border-yellow-900 py-4 mt-4">
      {/* Container de texto centralizado */}
      <div className="text-center text-white">
        {/* Parágrafo com o texto de direitos autorais */}
        <p className="text-sm">
          © 2024 CellFinder - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
