"use client";

export default function Services() {
  const services = [
    {
      icon: "💼",
      title: "Dedicated Desks",
      description: "Individual workspaces with all necessary amenities",
    },
    {
      icon: "🏢",
      title: "Meeting Rooms",
      description: "Private spaces equipped with projector and whiteboard for your presentations",
    },
    {
      icon: "☕",
      title: "Cafeteria",
      description: "Coffee and snacks available all day to keep you energized",
    },
    {
      icon: "🚗",
      title: "Parking",
      description: "Free parking for all our members",
    },
    {
      icon: "🖨️",
      title: "Printing",
      description: "Printing and scanning service available in the space",
    },
    {
      icon: "📞",
      title: "Reception",
      description: "Reception staff to assist you and receive your packages",
    },
  ];

  return (
    <section id="servicios" className="container mx-auto px-4 py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to work productively and comfortably
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

