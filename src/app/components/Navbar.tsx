import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logoImage from "/logo.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-0.5">
            <img src={logoImage} alt="HMA Logo" className="h-8 w-auto" />
            <span className="text-base" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              Outreach with HMA
            </span>
          </a>
          
          <div className="hidden lg:flex items-center gap-8 text-sm absolute left-1/2 -translate-x-1/2">
            <a href="#features" className="text-gray-600 hover:text-black transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-black transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-sm" asChild>
              <a href="https://app.outreachhma.com/" target="_blank" rel="noopener noreferrer">
                Log in
              </a>
            </Button>
            <Button className="bg-black text-white hover:bg-black/90 text-sm" asChild>
              <a href="https://tidycal.com/srikar/outreach-with-hma-product-demo" target="_blank" rel="noopener noreferrer">
                Book a call
              </a>
            </Button>
          </div>
          
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 space-y-4">
            <a href="#features" className="block text-gray-600 hover:text-black transition-colors">
              Features
            </a>
            <a href="#pricing" className="block text-gray-600 hover:text-black transition-colors">
              Pricing
            </a>
            <a href="#" className="block text-gray-600 hover:text-black transition-colors">
              Contact
            </a>
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="ghost" className="w-full" asChild>
                <a href="https://app.outreachhma.com/" target="_blank" rel="noopener noreferrer">
                  Log in
                </a>
              </Button>
              <Button className="w-full bg-black text-white hover:bg-black/90" asChild>
                <a href="https://tidycal.com/srikar/outreach-with-hma-product-demo" target="_blank" rel="noopener noreferrer">
                  Book a call
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}