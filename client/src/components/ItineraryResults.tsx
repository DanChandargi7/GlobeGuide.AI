import { Calendar, CloudSun, Info, Map } from "lucide-react";

const ItineraryResults = ({ data }: { data: any }) => {
  if (!data) return null;

  return (
    <div className="relative w-full min-h-dvh overflow-hidden flex items-center justify-center py-6 px-4">
      <img
        src="./src/assets/bg.jpg"
        alt="Travel Background"
        className="fixed inset-0 w-full h-full object-cover z-0"
      />

      <div className="fixed inset-0 bg-black/30 z-0" />

      <div className="relative z-10 w-full max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[650px]">
          <div className="md:col-span-2 md:row-span-2 bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20 overflow-y-auto max-h-[500px] md:max-h-full scrollbar-hide">
            <div className="flex items-center gap-2 mb-6 sticky top-0 bg-white/95 py-2 z-10">
              <Calendar className="text-blue-600" />
              <h2 className="text-2xl font-bold font-heading text-slate-900">
                Your Daily Plan
              </h2>
            </div>

            <div className="space-y-8 font-body text-slate-600">
              {data.days.map((day: any, i: number) => (
                <div
                  key={i}
                  className="border-l-2 border-blue-500/30 pl-6 relative"
                >
                  <div className="absolute left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white" />
                  <h3 className="font-bold text-slate-900 mb-2">Day {i + 1}</h3>
                  <p className="leading-relaxed">{day.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advice Card */}
          <div className="bg-blue-600 rounded-3xl p-6 text-white shadow-xl flex flex-col justify-between transform hover:scale-[1.02] transition-transform">
            <Info size={32} strokeWidth={1.5} />
            <div>
              <h3 className="text-xl font-bold font-heading mb-1">
                Local Advice
              </h3>
              <p className="text-blue-100 text-sm italic">{data.advice}</p>
            </div>
          </div>

          {/* Weather Card */}
          <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 text-white flex flex-col justify-between border border-white/10">
            <div className="flex justify-between items-start">
              <CloudSun size={32} className="text-yellow-400" />
              <span className="text-2xl font-bold">24°C</span>
            </div>
            <p className="text-slate-400 text-sm">{data.weather}</p>
          </div>

          {/* Map Section */}
          <div className="md:col-span-2 bg-white/10 backdrop-blur-md rounded-3xl p-6 flex items-center justify-center border-2 border-dashed border-white/20">
            <div className="text-center text-white/60">
              <Map className="mx-auto mb-2" size={40} strokeWidth={1} />
              <p className="font-medium">Interactive Map Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryResults;
