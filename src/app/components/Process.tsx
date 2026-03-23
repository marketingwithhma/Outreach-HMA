export function Process() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24 xl:py-32 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-3 sm:mb-4 tracking-tight px-2">
            How it works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            From prospect to meeting in 3 simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl mx-auto">
                1
              </div>
            </div>
            <h3 className="text-xl text-black mb-3">
              Book your onboarding call
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Schedule a call with our team. We'll understand your goals and get you set up with the perfect configuration.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl mx-auto">
                2
              </div>
            </div>
            <h3 className="text-xl text-black mb-3">
              We build your campaigns
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our team helps you create high-converting LinkedIn and email sequences tailored to your target audience.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl mx-auto">
                3
              </div>
            </div>
            <h3 className="text-xl text-black mb-3">
              Watch the leads flow
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sit back as qualified leads start responding. Track everything in real-time and optimize for better results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}