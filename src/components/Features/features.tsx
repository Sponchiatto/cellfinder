import Link from "next/link"; 
import { features } from "@/mocks/features"; 
interface Feature {
  // Definição da interface para os dados das funcionalidades
  id: number;
  title: string;
  description: string;
}

export default function Features() {
  return (
    // Seção principal do componente, com estilo de fundo gradiente e bordas arredondadas
    <section className="text-center mb-2 px-4 py-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-lg shadow-xl">
      {/* Título principal da seção */}
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-8 tracking-wide">
        Funcionalidades
      </h1>

      {/* Grid que adapta o layout conforme o tamanho da tela */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mapeando cada item do array 'features' e criando um cartão para cada funcionalidade */}
        {features.map((feature) => (
          <div
            key={feature.id} // Usando o ID da funcionalidade como chave única para cada item
            className="p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-lg text-center cursor-pointer hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
            // Estilos para cada item de funcionalidade, incluindo gradiente, bordas arredondadas e animações
          >
            {/* Link para a página de detalhes da funcionalidade, passando o ID da funcionalidade na URL */}
            <Link href={`/features/${feature.id}/`}>
              <h2 className="text-xl font-semibold text-white mb-4">
                {/* Título da funcionalidade */}
                {feature.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
