// BotaoVoltar.tsx
"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

// Componente funcional que retorna o botão "Saiba Mais!"
export default function BotaoVoltar() {
  const router = useRouter(); // Hook de navegação para voltar

  return (
    <Button
      variant="default"
      aria-label="Voltar"
      className="mt-6 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all duration-300 hidden sm:block"
      onClick={() => router.back()} // Navegação de volta
    >
      Voltar
    </Button>
  );
}
