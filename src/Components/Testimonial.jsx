import React, { useState, useEffect } from "react";

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      image:
        "https://www.moradhamdy.com/morad/traveltour-demo/images/files/sliders/testmonials/img-2.jpg",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: " OF TRAVELTOUR.COM",
    },
    {
      image:
        "https://www.moradhamdy.com/morad/traveltour-demo/images/files/sliders/testmonials/img-2.jpg",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: "DIRECTOR  .COM",
    },
    {
      image:
        "https://www.moradhamdy.com/morad/traveltour-demo/images/files/sliders/testmonials/img-2.jpg",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: "DIRECTOR OF .COM",
    },
    {
      image:
        "https://www.moradhamdy.com/morad/traveltour-demo/images/files/sliders/testmonials/img-2.jpg",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: ".COM",
    },
    // Add more testimonials here
  ];

  const partners = [
    {
      name: "CodeCanyon",
      logo: "https://www.moradhamdy.com/morad/traveltour-demo/images/files/sliders/clients/img-1.png",
    },
    {
      name: "ActiveDen",
      logo: "https://www.moradhamdy.com/morad/traveltour-demo/images/files/sliders/clients/img-2.png",
    },
    {
      name: "AudioJungle",
      logo: "https://www.moradhamdy.com/morad/traveltour-demo/images/files/sliders/clients/img-3.png",
    },
    {
      name: "PhotoDune",
      logo: "https://www.moradhamdy.com/morad/traveltour-demo/images/files/sliders/clients/img-4.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative mb-12">
          <img
            src={testimonials[currentSlide].image}
            alt="Testimonial"
            className="w-24 h-24 rounded-full mx-auto mb-6"
          />
          <div className="absolute top-0 right-0 bg-teal-500 text-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>
          <p className="text-center text-gray-600 mb-4">
            "{testimonials[currentSlide].quote}"
          </p>
          <p className="text-center font-bold text-sm uppercase">
            {testimonials[currentSlide].author}
          </p>
        </div>

        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-teal-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white p-4 rounded shadow">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
