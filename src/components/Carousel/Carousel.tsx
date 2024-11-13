import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function CarouselComponent() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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

    
  return (
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
  );
}
