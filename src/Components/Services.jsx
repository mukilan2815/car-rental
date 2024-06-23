import React, { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("Hotel Reservation");

  const tabs = [
    { name: "Airline Tickets", icon: "✈️" },
    { name: "Worldwide Tours", icon: "🌎" },
    { name: "Hotel Reservation", icon: "🏛️" },
    { name: "Medical Tours", icon: "❤️" },
  ];

  const tabContent = {
    "Hotel Reservation": {
      title: "Hotel Reservation",
      description:
        "Duis ac adipiscing risus. Fusce posuere hendrerit velit sit amet scelerisque. Fusce ac nulla mauris. In accumsan eget sapien ut aliquet. Nunc pellentesque nisl at ante fermentum porta. Vestibulum dapibus sed leo nec condimentum.",
      features: [
        "Nam sit amet eros vel nunc pharetra imperdiet.",
        "Nulla mattis lacus pharetra aliquet porttitor.",
        "Phasellus sodales ligula in odio facilisis, quis fermentum tellus dapibus.",
        "Mauris vel massa id lacus iaculis accumsan at in augue.",
        "Aenean convallis metus a ultricies pharetra.",
      ],
      image:
        "https://www.moradhamdy.com/morad/traveltour-demo/images/files/our-services/img-3.jpg",
    },
    "Airline Tickets": {
      title: "Airline Tickets",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris dapibus risus quis suscipit vulputate.",
      features: [
        "Convenient flight bookings.",
        "Best prices guaranteed.",
        "24/7 customer support.",
        "Easy cancellation policy.",
        "Frequent flyer rewards.",
      ],
      image:
        "https://www.moradhamdy.com/morad/traveltour-demo/images/files/our-services/img-1.jpg",
    },
    "Worldwide Tours": {
      title: "Worldwide Tours",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        "Guided tours in multiple languages.",
        "Customizable itineraries.",
        "Exclusive deals and discounts.",
        "Comprehensive travel insurance.",
        "24/7 travel assistance.",
      ],
      image:
        "https://www.moradhamdy.com/morad/traveltour-demo/images/files/our-services/img-2.jpg",
    },
    "Medical Tours": {
      title: "Medical Tours",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      features: [
        "Top-notch medical facilities.",
        "Expert medical consultations.",
        "Affordable treatment packages.",
        "Comprehensive post-treatment care.",
        "Travel and accommodation assistance.",
      ],
      image:
        "https://www.moradhamdy.com/morad/traveltour-demo/images/files/our-services/img-3.jpg",
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between mb-8">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex flex-col hover:text-gray-700 items-center cursor-pointer ${
              activeTab === tab.name ? "text-teal-500" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2 ${
                activeTab === tab.name
                  ? "bg-transparent border-2 border-teal-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {tab.icon}
            </div>
            <span className="text-sm">{tab.name}</span>
            <div
              className={`h-1 w-full mt-2 ${
                activeTab === tab.name ? "bg-teal-500" : "bg-gray-200"
              }`}
            ></div>
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="w-1/2 pr-8">
          <h2 className="text-2xl font-bold mb-4">
            {tabContent[activeTab].title}
          </h2>
          <p className="text-gray-600 mb-6">
            {tabContent[activeTab].description}
          </p>
          <ul className="space-y-2">
            {tabContent[activeTab].features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 text-teal-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <img
            src={tabContent[activeTab].image}
            alt={tabContent[activeTab].title}
            className="w-full border p-4 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
