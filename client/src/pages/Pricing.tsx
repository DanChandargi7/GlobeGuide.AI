import PriceCards from "../components/PriceCards";

const Pricing = () => {
  const plans = [
    {
      title: "Starter",
      description: "Perfect for weekend explorers and hobbyists.",
      price: "$0",
      features: [
        "5 AI Itineraries",
        "Basic Community Support",
        "Global Map Access",
      ],
    },
    {
      title: "Pro",
      description: "For serious travelers who want the best experience.",
      price: "$19",
      isFeatured: true,
      features: [
        "Unlimited Itineraries",
        "Priority AI Processing",
        "Offline Mode",
        "Expert Human Review",
      ],
    },
    {
      title: "Enterprise",
      description: "Custom solutions for travel agencies and groups.",
      price: "Custom",
      features: [
        "White-label Options",
        "API Access",
        "Dedicated Support",
        "Custom Branding",
      ],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-white text-4xl md:text-6xl font-black font-heading mb-4">
          Simple, Transparent <span className="text-blue-500">Pricing</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Choose the plan that fits your travel style. No hidden fees, cancel
          anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, index) => (
          <PriceCards key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
