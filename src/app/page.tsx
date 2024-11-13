"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/router";
import Header from "@/components/Header/header";
import { Carousel } from "@/components/ui/carousel";
import Features from "@/components/Features/features";
import Text from "@/components/MiddleText/Text";
import Footer from "@/components/Footer/footer";
import CarouselComponent from "@/components/Carousel/Carousel";
import Testimonials from "@/components/Testimonial/testimonial";

// Interface para definir a estrutura de cada feature

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 space-y">
      {/* Título e Subtítulo */}
      <Header />

      {/* Carrossel */}
      <CarouselComponent />

      {/* Intro Text */}
      <Text>
        <h2 className="text-2xl font-semibold text-center to-stone-900 m-4">
          Ah, mas o que esse cellfinder faz?
          <br />
          Ele acha seu celular, ué... Ah mas você quer dizer como ele faz isso,
          veja por você.
        </h2>
      </Text>

      {/* Cards de Features */}
      <Features />

      {/* Intro Text */}
      <Text>
        <h2 className="text-3xl font-semibold text-center to-stone-900 mb-8">
          Tá gostando?
          <br />
          Veja alguns depoimentos de nossos usuários completamente imparciais e verdadeiros.Confia...
        </h2>
      </Text>

      {/* Depoimentos */}
      <Testimonials />

      {/* Botão Saiba Mais */}
      <Button
        variant="default"
        aria-label="Em Breve! Saiba mais sobre o CellFinder"
        className="px-20 py-10 text-to-stone-900 font-semibold text-lg rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Em Breve!
      </Button>

      <Footer />
    </main>
  );
}
