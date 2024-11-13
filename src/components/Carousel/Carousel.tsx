import { useEffect, useState } from "react"; // Importação dos hooks useEffect e useState do React
import Image from "next/image"; // Importando o componente Image do Next.js para otimizar imagens
import { Card, CardContent } from "@/components/ui/card"; // Importando o componente Card e CardContent
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"; // Importando componentes relacionados ao carrossel
import { images } from "@/mocks/carousel";

export default function CarouselComponent() {
  // Estado para armazenar a API do carrossel
  const [api, setApi] = useState<CarouselApi>();

  // Estado para controlar o índice do slide atual
  const [current, setCurrent] = useState(0);

  // Estado para armazenar a quantidade total de slides
  const [count, setCount] = useState(0);

  // useEffect que é executado quando a API do carrossel é carregada
  useEffect(() => {
    if (!api) {
      return;
    }

    // Atualiza o número total de slides e o slide atual
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    // Ouve o evento de seleção de um novo slide e atualiza o índice do slide atual
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]); // A dependência é a API do carrossel

  return (
    // Contêiner geral com fundo gradiente, borda e sombra
    <div className="w-screen bg-gradient-to-b from-stone-800 to-stone-900 shadow-2xl border-b border-yellow-900">
      <section className="w-full max-w-xl mx-auto py-46 m-4">
        {/* Componente Carousel que recebe a função para setar a API */}
        <Carousel setApi={setApi} className="w-full max-w-2xl">
          <CarouselContent>
            {/* Mapeia o array de imagens e cria um item para cada uma */}
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  {/* Card que contém a imagem e a legenda */}
                  <Card className="overflow-hidden relative">
                    <CardContent
                      className="flex aspect-square items-center justify-center p-0"
                      aria-live="polite" // Indica que o conteúdo deve ser lido por leitores de tela
                    >
                      {/* Componente de imagem otimizada pelo Next.js */}
                      <Image
                        src={image.src}
                        alt={`Imagem ${index + 1}`}
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                      />
                      {/* Texto sobre a imagem, visível na parte inferior */}
                      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2">
                        <span className="text-sm">{image.caption}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Botões de navegação entre os slides */}
          <CarouselPrevious aria-label="Slide anterior" />
          <CarouselNext aria-label="Próximo slide" />
        </Carousel>
        {/* Exibe a contagem de slides e o slide atual */}
        <div className="py-2 text-center text-sm text-muted-foreground">
          {current} de {count}
        </div>
      </section>
    </div>
  );
}
