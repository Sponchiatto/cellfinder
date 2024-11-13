interface Feature {
  id: number;
  title: string;
  description: string;
}

export default function Features() {

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

  return (
    <section className="text-center mb-2 px-4 py-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-8 tracking-wide">
        Funcionalidades
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-lg text-center cursor-pointer hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              {feature.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
