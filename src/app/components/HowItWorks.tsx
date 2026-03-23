import { Upload, Edit3, Rocket } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Import your leads",
    description: "Upload from CSV, Sales Navigator, or find prospects directly in the platform.",
  },
  {
    icon: Edit3,
    title: "Build your sequence",
    description: "Create personalized LinkedIn and email sequences with our intuitive builder.",
  },
  {
    icon: Rocket,
    title: "Launch and scale",
    description: "Activate your campaign and watch the meetings roll in. Optimize based on real-time data.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl text-black mb-4 tracking-tight">
            Get started in minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No complex setup. No technical knowledge required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-gray-200"></div>
                )}
                
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-black text-white mb-6">
                  <Icon className="h-9 w-9" />
                </div>
                
                <h3 className="text-xl text-black mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}