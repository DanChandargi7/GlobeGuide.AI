import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ItineraryResults from "./components/ItineraryResults";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  useNavigate,
} from "react-router-dom";
import Explore from "./pages/Explore";
import Pricing from "./pages/Pricing";

const App = () => {
  const [itinerary, setItinerary] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePlanTrip = async (destination: string) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/plan-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destination }),
      });

      const data = await response.json();
      setItinerary(data); // This matches our ItineraryResults prop structure!
      navigate("/itinerary");
    } catch (error) {
      alert("Error connecting to AI server.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />

      <Routes>
        {}
        <Route
          path="/"
          element={<Hero onPlan={handlePlanTrip} loading={loading} />}
        />
        <Route
          path="/itinerary"
          element={<ItineraryResults data={itinerary} />}
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      {/* {!itinerary && <Hero onPlan={handlePlanTrip} loading={loading} />}

      {itinerary && (
        <div className="">
          <ItineraryResults data={itinerary} />
        </div>
      )} */}
    </div>
  );
};

export default App;
