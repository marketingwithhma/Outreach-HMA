import { Check, X } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  { text: "Unlimited connections", included: true },
  { text: "Unlimited messages", included: true },
  { text: "Unlimited contact scraping", included: true },
  { text: "100+ emails/day/Inbox", included: true },
  { text: "Free setup call", included: true },
  { text: "Copywriting + Campaign Launch Support", included: true },
  { text: "Bring your own proxies (Optional)", included: true },
  { text: "Multi-channel sequences", included: true },
  { text: "Smart personalization", included: true },
  { text: "A/B testing", included: true },
  { text: "Analytics & reporting", included: true },
  { text: "CRM integrations", included: true },
  { text: "Team collaboration", included: true },
  { text: "Inbox management", included: true },
  { text: "Campaign templates", included: true },
  { text: "Lead scoring", included: true },
  { text: "Auto-reply detection", included: true },
  { text: "Timezone optimization", included: true },
  { text: "LinkedIn safety features", included: true },
  { text: "Priority support", included: true },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24 xl:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-3 sm:mb-4 tracking-tight px-2">
            Tool + Agency Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            One simple price for the platform AND done-with-you campaign support
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-black overflow-hidden shadow-xl">
            <div className="bg-black text-white p-8 text-center">
              <h3 className="text-2xl mb-4">Pro</h3>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-xl">$</span>
                <span className="text-6xl">59</span>
                <span className="text-xl">/sender</span>
              </div>
              <p className="text-white/80 text-sm mb-8">renews monthly, cancel anytime</p>
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-white/90 px-8 w-full sm:w-auto mb-4"
              >
                Book your Free Onboarding & Campaign Setup
              </Button>
              <div className="text-sm text-white/60">
                ...or{" "}
                <a href="#" className="underline hover:text-white">
                  click here to get a live demo first
                </a>
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <h4 className="text-2xl text-black mb-2 text-center">
                The Limitless Power Of LinkedIn & Email Outreach
              </h4>
              <p className="text-center text-gray-600 mb-8">
                No payment is required now, schedule your free onboarding + account setup today and only pay on the call.
              </p>
              
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                        <X className="h-3 w-3 text-gray-400" />
                      </div>
                    )}
                    <span className={feature.included ? 'text-gray-900' : 'text-gray-400 line-through'}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              🔒 Secure payment • 📞 Free setup included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}