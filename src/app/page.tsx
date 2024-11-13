"use client"; // Indica que este é um componente React que será executado no lado do cliente, utilizando funcionalidades específicas do Next.js

import Header from "@/components/Header/header"; // Importa o componente de cabeçalho
import Features from "@/components/Features/features"; // Importa o componente que renderiza as funcionalidades (features)
import Text from "@/components/MiddleText/Text"; // Importa um componente de texto centralizado
import Footer from "@/components/Footer/footer"; // Importa o componente de rodapé
import CarouselComponent from "@/components/Carousel/Carousel"; // Importa o componente do carrossel
import Testimonials from "@/components/Testimonial/testimonial"; // Importa o componente de depoimentos
import BotaoSaibaMais from "@/components/Botao/saibaMais"; // Importa o botão "Saiba Mais"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 space-y">

      {/* Título e Subtítulo */}
      <Header /> 

      {/* Carrossel */}
      <CarouselComponent /> 

      {/* Text */}
      <Text>
        <h2 className="text-2xl font-semibold text-center to-stone-900 m-4">
          Ah, mas o que esse cellfinder faz?
          <br />
          Ele acha seu celular, ué... Ah mas você quer dizer como ele faz isso,
          veja por você.
        </h2>
      </Text>

      {/* Cards de Features */}
      <Features /> /

      {/* Text */}
      <Text>
        <h2 className="text-3xl font-semibold text-center to-stone-900 mb-8">
          Tá gostando?
          <br />
          Veja alguns depoimentos de nossos usuários completamente imparciais e
          verdadeiros.Confia...
        </h2>
      </Text>

      {/* Depoimentos */}
      <Testimonials /> 

      {/* Botão Saiba Mais */}
      <BotaoSaibaMais /> 

      <Footer /> 
    </main>
  );
}
