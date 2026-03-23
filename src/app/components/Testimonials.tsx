const testimonials = [
  {
    quote: "We 3x'd our pipeline in the first month. The LinkedIn + email combo is a game changer.",
    author: "Sarah Chen",
    role: "Head of Sales, TechCorp",
    avatar: "SC",
  },
  {
    quote: "Finally, a tool that doesn't get our accounts banned. The safety features actually work.",
    author: "Michael Rodriguez",
    role: "Founder, GrowthLabs",
    avatar: "MR",
  },
  {
    quote: "Our team went from 10 meetings a week to 40. This paid for itself in the first week.",
    author: "Emily Thompson",
    role: "VP Sales, DataFlow",
    avatar: "ET",
  },
];

export function Testimonials() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24 xl:py-32 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-3 sm:mb-4 tracking-tight px-2">
            Trusted by sales teams worldwide
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100"
            >
              <p className="text-black mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm text-black">{testimonial.author}</div>
                  <div className="text-xs text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}