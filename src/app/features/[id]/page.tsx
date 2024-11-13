"use client"; // Indica que este é um componente React e que está usando recursos específicos do Next.js como navegação do lado do cliente (client-side navigation)

import { useParams} from "next/navigation"; // Importa os hooks useParams e useRouter do Next.js para manipulação de parâmetros dinâmicos de URL e navegação
import { features } from "@/mocks/features"; // Importa um mock de dados de recursos (features) para exibir na página
import Text from "@/components/MiddleText/Text"; // Importa um componente de texto
import BotaoSaibaMais from "@/components/Botao/saibaMais"; // Importa um botão "Saiba Mais"
import BotaoVoltar from "@/components/BotaoVoltar/botaoVoltar"; // Importa um botão "Voltar"

export default function FeatureDetail() {
  const { id } = useParams(); // Usa o hook useParams para acessar o parâmetro dinâmico 'id' na URL

  // Converte o id para número, se for uma string válida, caso contrário retorna null
  const featureId = typeof id === "string" ? Number(id) : null;

  // Verifica se o id é válido, se não, exibe uma mensagem de "Carregando..."
  if (featureId === null) {
    return <p>Carregando...</p>;
  }

  // Encontra a feature com o id correspondente no mock de dados
  const feature = features.find((f) => f.id === featureId);

  // Se a feature não for encontrada, exibe uma mensagem de erro
  if (!feature) {
    return <p>Feature não encontrada!</p>;
  }

  return (
    <section className="text-center px-4 py-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black  shadow-xl">
      {/* Título da Feature */}
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-8 tracking-wide">
        {feature.title}
      </h1>

      {/* Descrição da Feature */}
      <p className="text-white mb-6">{feature.description}</p>

      {/* Detalhes sobre a feature */}
      <div className="bg-gray-700 p-6 rounded-lg text-white">
        <h2 className="text-2xl font-semibold mb-4">Detalhes</h2>
        <p>{feature.detailedText}</p>
      </div>

      {/* Benefícios da feature */}
      <div className="bg-gray-700 p-6 rounded-lg text-white mt-6">
        <h2 className="text-2xl font-semibold mb-4">Benefícios</h2>
        <p>{feature.benefits}</p>
      </div>

      {/* Texto explicativo abaixo */}
      <section className="bg-white py-6 px-8 rounded-lg mt-8 shadow-md">
        <Text>
          Incrível, né! Você pode voltar e ver outras funcionalidades ou clicar
          logo em "Saiba Mais" e seguir para o formulário de interesse.
        </Text>
      </section>

      {/* Botões de Voltar e Saiba Mais */}
      <div className="flex justify-between items-center space-x-4 mt-8 mx-4">
        <BotaoVoltar /> {/* Botão para voltar para a página anterior */}
        <BotaoSaibaMais />{" "}
        {/* Botão para mostrar mais informações ou formulário */}
      </div>
    </section>
  );
}
