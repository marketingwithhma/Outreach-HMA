import { Star } from "lucide-react";
import G2Logo from "../../imports/G2Logo-Red.svg";

export function Stats() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gray-50 border-y border-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16">
          {/* Trusted by companies */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 mb-2">Trusted by</p>
            <p className="text-2xl text-black font-semibold">5,000+ companies</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-gray-200"></div>

          {/* Rating */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl text-black font-semibold">4.7</span>
            </div>
            <p className="text-sm text-gray-600">Average rating</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-gray-200"></div>

          {/* G2 Badge */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <img src={G2Logo} alt="G2 Logo" className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-black">2026 Fastest</p>
              <p className="text-sm font-semibold text-black">Growing Product</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}