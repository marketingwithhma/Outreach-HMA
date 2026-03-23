import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24 xl:py-32 bg-black text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 tracking-tight px-2">
          Ready to 10x your outreach?
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          Join thousands of sales professionals who are booking more meetings with less effort.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 text-base px-8 h-12"
          >
            Book your call now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base px-8 h-12"
          >
            Watch demo
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          Quick setup • LinkedIn safe • Cancel anytime
        </p>
      </div>
    </section>
  );
}