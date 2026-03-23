import { Linkedin, Twitter, Youtube } from "lucide-react";
import logoImage from "figma:asset/968280b771f9e2ad9c9dd45e8e66fb9d2a6e84bc.png";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-0.5 mb-4">
              <img src={logoImage} alt="HMA Logo" className="h-8 w-auto" />
              <span className="text-base" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                Outreach with HMA
              </span>
            </a>
            <p className="text-gray-600 text-sm max-w-sm">
              The all-in-one platform for LinkedIn and email outreach automation.
            </p>
            
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full border border-gray-200 hover:border-black flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4 text-gray-600" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-gray-200 hover:border-black flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4 text-gray-600" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-gray-200 hover:border-black flex items-center justify-center transition-colors">
                <Youtube className="h-4 w-4 text-gray-600" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-black text-sm mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-black text-sm mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>&copy; 2026 Outreach with HMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}