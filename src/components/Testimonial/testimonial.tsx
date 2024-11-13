type Testimonial = {
  name: string;
  role: string;
  message: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ana Souza",
    role: "Empresária",
    message:
      "O CellFinder é simplesmente incrível! Consegui recuperar meu celular em minutos após perdê-lo. Super recomendo!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos Pereira",
    role: "Professor",
    message:
      "Nunca me senti tão seguro sabendo que posso encontrar meu dispositivo a qualquer momento. Ferramenta essencial!",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Mariana Lima",
    role: "Freelancer",
    message:
      "O suporte e a tecnologia são de outro nível. Nunca mais me preocupei em perder meu celular.",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "João Mendes",
    role: "Estudante",
    message: "Funciona como prometido! Recomendo para todos os meus amigos.",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Beatriz Carvalho",
    role: "Engenheira de Software",
    message:
      "Recuperar meu celular nunca foi tão fácil e rápido. Recomendo para todos os meus colegas!",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Lucas Andrade",
    role: "Empresário",
    message:
      "Vale cada centavo! A tranquilidade de saber que posso localizar meu dispositivo em qualquer situação é impagável.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-stone-900 text-yellow-200 py-12 mb-5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Depoimentos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-stone-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-yellow-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-stone-300">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
