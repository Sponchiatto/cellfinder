// BotaoSaibaMais.tsx
import { Button } from "../ui/button";

// Componente funcional que retorna o botão "Saiba Mais!"
export default function BotaoSaibaMais() {
  return (
    // Componente Button com várias propriedades para estilização e acessibilidade
    <Button
      variant="default"
      aria-label="Saiba mais sobre o CellFinder"
      className="px-20 py-10 text-to-stone-900 font-semibold text-lg rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
    >
      Saiba Mais!
    </Button>
  );
}
