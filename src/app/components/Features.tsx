import { Mail, Linkedin, Zap, Users, BarChart3, Shield, MessageSquare, Calendar } from "lucide-react";

const features = [
  {
    icon: Linkedin,
    title: "LinkedIn Automation",
    description: "Send connection requests, messages, and InMails automatically. Stay safe with human-like activity patterns.",
  },
  {
    icon: Mail,
    title: "Email Sequences",
    description: "Follow up with personalized emails. Seamlessly integrate with your LinkedIn outreach for better results.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Campaigns",
    description: "Combine LinkedIn and email in one sequence. Reach prospects wherever they're most active.",
  },
  {
    icon: Zap,
    title: "Smart Personalization",
    description: "Use variables and AI to personalize every message. Make your outreach feel genuine, not automated.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Send messages at optimal times based on prospect timezone and activity patterns.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track opens, clicks, and responses. See what's working and optimize on the fly.",
  },
  {
    icon: Users,
    title: "Team Workspace",
    description: "Manage multiple accounts, share templates, and collaborate with your team in one place.",
  },
  {
    icon: Shield,
    title: "LinkedIn Safe",
    description: "Built-in limits and randomization to keep your accounts safe. We handle the compliance.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24 xl:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-3 sm:mb-4 tracking-tight px-2">
            Powerful Tool + Expert Guidance
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Get enterprise-grade automation with agency-level support to ensure your campaigns succeed
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group"
              >
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg text-black mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}