import { ArrowUpRight, MapPin } from "lucide-react";

interface ExploreCardProps {
  image: string | any;
  heading: string;
  description: string;
}

const Cards = ({ image, description, heading }: ExploreCardProps) => {
  return (
    <div className="group relative w-full h-[400px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:shado-blue-500/20">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

      {/* 3. Content Layer */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-500">
        {/* Location Badge */}
        <div className="flex items-center gap-1 text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          <MapPin size={14} />
          <span>Trending</span>
        </div>

        <h3 className="text-2xl font-bold font-heading mb-2 leading-tight">
          {heading}
        </h3>

        <p className="text-sm text-slate-200 line-clamp-2 font-body opacity-80 group-hover:opacity-100 transition-opacity">
          {description}
        </p>

        {/* 4. Floating Action Button (Shows on Hover) */}
        <div className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 -translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
