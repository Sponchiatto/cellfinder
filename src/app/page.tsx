"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/router";

// Interface para definir a estrutura de cada feature
interface Feature {
  id: number;
  title: string;
  description: string;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const features: Feature[] = [
    {
      id: 1,
      title: "Encontre seu celular rapidamente",
      description:
        "Utilizando técnicas sofisticadas, como Memória Fotográfica, Eu sei que estava aqui, Chamar pelo nome, Desesperação Falsa, Olhar em Cada Canto possível e muitas outras.",
    },
    {
      id: 2,
      title: "Rastreamento em tempo real",
      description:
        "Com a revolucionária unidade física do tempo e rastreamento tridimensional, agora você não só sabe onde está seu celular, mas também onde ele *vai* estar – no fabuloso 4D. É quase como se você pudesse ver o futuro, mas só para objetos perdidos.",
    },
    {
      id: 3,
      title: "Notificações inteligentes",
      description:
        "Graças ao avanço revolucionário do sistema sensorial humano, agora seus 5 sentidos serão seus novos alertas. O toque, o olfato, a visão e até o gosto – prepare-se para uma evolução onde você sentirá as notificações *na pele* (literalmente). O futuro chegou, e ele faz barulho!",
    },
    {
      id: 4,
      title: "Modo Noturno",
      description:
        "Utilizando uma tecnologia que todos possuem, olhos, deixando um olho fechado e outro aberto, na falta de luz, você abre o olho que estava fechado e fecha o que estava aberto, entendeu? Leia com cuidado. Isso fará com que você tenha acostumado seu olho ao escuro, possiblitando achar seu celular!",
    },
    {
      id: 5,
      title: "Busca por Áudio",
      description:
        "Você deve estar pensando num sistema que reproduz SOM. Mas isso é ultrapassado, eu penso em sonar, através da sua voz e um treinamento intensivo você emitira ondas sonoras para saber quais objetos estão a sua volta. Se os morcegos fazem, porque eu não posso fazer. E com isso encontrará seu celular.",
    },
    {
      id: 7,
      title: "Busca por Adivinhação",
      description:
        "Você já tentou adivinhar onde está seu celular? Agora, ao invés de procurar no bolso ou na mesa, você pode apenas pensar ‘Eu sinto que está perto...’ e o aplicativo usará seus poderes mentais para sugerir lugares onde você provavelmente deixou seu celular. Pode não funcionar, mas com certeza será uma experiência mística.",
    },
    {
      id: 8,
      title: "Modo Cegueira Provisória",
      description:
        "Sabe aquela sensação de que está sempre no lugar errado? Ative o Modo Cegueira Provisória e seu celular se esconderá de você com a mesma frequência que você esquece onde o colocou. Isso vai te treinar para parar de perder coisas e ganhar habilidades de memória — ou pelo menos tentar e em futuras perdas tornar mais fácil o processo de achar seu celular.",
    },
    {
      id: 9,
      title: "Modo 'Onde Eu Coloquei Isso?'",
      description:
        "Você já teve aquele momento de total desespero onde não faz ideia de onde colocou o celular? O Modo 'Onde Eu Coloquei Isso?' ajuda você a reviver suas últimas 24 horas em detalhes, mostrando as 23 vezes que você olhou para o celular e a 1 vez que o deixou em algum lugar que você não se lembra. Boa sorte!",
    },
    {
      id: 10,
      title: "Busca por Inércia",
      description:
        "Seu celular vai começar a tocar quando você parar de procurar. Sabe quando você está desistindo e jogando tudo para o alto? Exatamente o momento em que a busca termina e ele aparece. Nada como a lei da inércia para funcionar no seu favor.",
    },
  ];

  const images = [
    { src: "/images/voce.jpg", caption: "VOCÊ, sabe onde está seu celular?" },
    {
      src: "/images/eusei.jpg",
      caption: "EU SEI, quer dizer... o cellfinder sabe. Mas como?",
    },
    {
      src: "/images/passaro.jpg",
      caption:
        "Utilizando técnicas e tecnologias que até Deus dúvida, e deixarão você igual esse pássaro, completamente interessado.",
    },
    { src: "/images/signos.jpg", caption: "Técnicas baseadas em evidências" },
    { src: "/images/ciencia.jpg", caption: "Ciência" },
    {
      src: "/images/achismo.jpg",
      caption: "um pouco de achismo, só um pouco :)",
    },
    {
      src: "/images/surpreso.jpg",
      caption: "Deixando você completamente SURPRESO",
    },
    {
      src: "/images/curioso.jpg",
      caption: "Ficou curioso? Então, siga adiante e entenda melhor.",
    },
    {
      src: "/images/vailogo.jpg",
      caption: "Vai logo!",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <main className="flex flex-col items-center px-4 space-y">
      {/* Título e Subtítulo */}
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

      <h2 className="text-2xl font-semibold text-center to-stone-900 m-4">
        Antes de entrarmos nas funcionalidades desse incrível produto,
        precisamos identificar se você está pronto.
        <br />
        Pronto para essa disrrupção da tecnologia.
      </h2>

      {/* Carrossel */}
      <div className="w-screen bg-gradient-to-b from-stone-800 to-stone-900 shadow-2xl border-b border-yellow-900">
        <section className="w-full max-w-xl mx-auto py-46 m-4">
          <Carousel setApi={setApi} className="w-full max-w-2xl">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden relative">
                      <CardContent
                        className="flex aspect-square items-center justify-center p-0"
                        aria-live="polite"
                      >
                        <Image
                          src={image.src}
                          alt={`Imagem ${index + 1}`}
                          width={500}
                          height={500}
                          className="object-cover w-full h-full"
                        />
                        {/* Texto sobre a imagem */}
                        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2">
                          <span className="text-sm">{image.caption}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Slide anterior" />
            <CarouselNext aria-label="Próximo slide" />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            {current} de {count}
          </div>
        </section>
      </div>

      <h2 className="text-2xl font-semibold text-center to-stone-900 m-4">
        Ah, mas o que esse cellfinder faz?
        <br />
        Ele acha seu celular, ué... Ah mas você quer dizer como ele faz isso,
        veja por você.
      </h2>
      {/* Cards de Features */}
      <section className="text-center mb-2 px-4 py-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-8 tracking-wide">
          Funcionalidades
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-lg text-center cursor-pointer hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => {
                setActiveFeature(feature);
                setIsOpen(true);
              }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <h2 className="text-3xl font-semibold text-center to-stone-900 mb-8">
        Tá gostando?
        <br />
        Veja alguns depoimentos de nossos usuários completamente imparciais.
      </h2>

      {/* Depoimentos */}
      <h2>Depoimentos</h2>

      {/* Botão Saiba Mais */}
      <Button
        variant="default"
        aria-label="Em Breve! Saiba mais sobre o CellFinder"
        className="px-20 py-10 text-white font-semibold text-lg rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Em Breve!
      </Button>

      <footer className="w-screen bg-gradient-to-t from-stone-800 to-stone-900 shadow-2xl border-t border-yellow-900 py-4 mt-4">
        <div className="text-center text-white">
          <p className="text-sm">
            © 2024 CellFinder - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
