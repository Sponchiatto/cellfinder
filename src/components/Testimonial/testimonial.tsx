import { testimonials } from "@/mocks/testimonials";

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
