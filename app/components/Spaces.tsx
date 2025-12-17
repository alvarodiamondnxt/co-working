"use client";

export default function Spaces() {
  const spaces = [
    {
      name: "Open Space",
      image: "🪑",
      capacity: "20 people",
      price: "€15/day",
      features: ["Shared desks", "Unlimited WiFi", "Coffee included"],
    },
    {
      name: "Private Office",
      image: "🚪",
      capacity: "4-6 people",
      price: "€80/day",
      features: ["Closed space", "Full furniture", "Outside view"],
    },
    {
      name: "Meeting Room",
      image: "📊",
      capacity: "8-12 people",
      price: "€40/hour",
      features: ["Projector", "Whiteboard", "Video conference"],
    },
    {
      name: "Event Space",
      image: "🎉",
      capacity: "50+ people",
      price: "€200/day",
      features: ["Professional sound", "Lighting", "Catering available"],
    },
  ];

  return (
    <section id="espacios" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Spaces
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect space for your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {spaces.map((space, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 h-48 flex items-center justify-center text-8xl">
              {space.image}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{space.name}</h3>
              <p className="text-gray-600 mb-4">{space.capacity}</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">{space.price}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {space.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

