import React from "react";
import Cards from "../components/Cards";
import kyotoImg from "../assets/Kyoto.jpg";

const Explore = () => {
  const destinations = [
    {
      title: "Kyoto, Japan",
      img: "./src/assets/Kyoto.jpg",
      desc: "Experience the perfect blend of ancient temples and neon-lit streets.",
    },
    {
      title: "Amalfi Coast, Italy",
      img: "./src/assets/italy.jpg",
      desc: "Sun-drenched cliffs and turquoise waters await in this Mediterranean paradise.",
    },
    {
      title: "Svalbard, Norway",
      img: "./src/assets/norway.jpg",
      desc: "A land of dramatic glaciers and polar bears under the ethereal Northern Lights.",
    },
    {
      title: "Bagan, Myanmar",
      img: "./src/assets/myanmar.jpg",
      desc: "Rise with the hot air balloons over thousands of ancient golden pagodas at sunrise.",
    },
    {
      title: "Santorini, Greece",
      img: "./src/assets/santorini.jpg",
      desc: "Iconic blue-domed churches and whitewashed houses overlooking the Aegean Sea.",
    },
    {
      title: "Banff, Canada",
      img: "./src/assets/Banff.jpg",
      desc: "Crystal-clear turquoise lakes framed by the majestic, snow-capped peaks of the Rockies.",
    },
    {
      title: "Chefchaouen, Morocco",
      img: "./src/assets/morocco.jpg",
      desc: "Get lost in the mesmerizing, dreamlike blue-washed streets of the Rif Mountains.",
    },

    // Add more...
  ];
  return (
    <div className="mt-15">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 z-20">
        {destinations.map((dest, index) => (
          <Cards
            key={index}
            heading={dest.title}
            image={dest.img}
            description={dest.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
