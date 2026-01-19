import { Check } from "lucide-react";

interface PriceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}
const PriceCards = ({
  title,
  description,
  price,
  features,
  isFeatured,
}: PriceCardProps) => {
  return (
    <div
      className={`relative p-8 rounded-3xl transition-all duration-300 border ${
        isFeatured
          ? "bg-white/20 backdrop-blur-2xl border-blue-400/50 scale-105 shadow-2xl z-10"
          : "bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15"
      }`}
    >
      {isFeatured && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          Most Popular
        </span>
      )}

      <div className="mb-8">
        <h3 className="text-white text-2xl font-bold font-heading mb-2">
          {title}
        </h3>
        <p className="text-white/60 text-sm font-body">{description}</p>
      </div>

      <div className="mb-8">
        <span className="text-white text-5xl font-black font-heading">
          {price}
        </span>
        {price !== "Custom" && <span className="text-white/40 ml-2">/mo</span>}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-white/80 text-sm"
          >
            <Check size={18} className="text-blue-400" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-2xl font-bold transition-all ${
          isFeatured
            ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
            : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
        }`}
      >
        {title === "Enterprise" ? "Contact Sales" : "Get Started"}
      </button>
    </div>
  );
};

export default PriceCards;
