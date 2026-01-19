import Cards from "../components/Cards";
const Explore = () => {
  const destinations = [
    {
      title: "Kyoto, Japan",
      img: "https://i.ibb.co/DPJj2pkc/Kyoto.jpg",
      desc: "Experience the perfect blend of ancient temples and neon-lit streets.",
    },
    {
      title: "Amalfi Coast, Italy",
      img: "https://i.ibb.co/7x0bWmLX/italy.jpg",
      desc: "Sun-drenched cliffs and turquoise waters await in this Mediterranean paradise.",
    },
    {
      title: "Svalbard, Norway",
      img: "https://i.ibb.co/RG08vR4M/norway.jpg",
      desc: "A land of dramatic glaciers and polar bears under the ethereal Northern Lights.",
    },
    {
      title: "Bagan, Myanmar",
      img: "https://i.ibb.co/9Hg3QYS2/myanmar.jpg",
      desc: "Rise with the hot air balloons over thousands of ancient golden pagodas at sunrise.",
    },
    {
      title: "Santorini, Greece",
      img: "https://i.ibb.co/LX7719CS/santorini.jpg",
      desc: "Iconic blue-domed churches and whitewashed houses overlooking the Aegean Sea.",
    },
    {
      title: "Banff, Canada",
      img: "./src/assets/Banff.jpg",
      desc: "Crystal-clear turquoise lakes framed by the majestic, snow-capped peaks of the Rockies.",
    },
    {
      title: "Chefchaouen, Morocco",
      img: "https://i.ibb.co/RxHnSGb/morocco.jpg",
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
