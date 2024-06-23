import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/6f/ca/e3/6fcae30f963d663f6b1d5991730df388.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          AWESOME & CREATIVE
          <br />
          <span className="text-yellow-400">TRAVEL TEMPLATE</span>
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <button className="bg-yellow-400 hover:bg-transparent border-yellow-400 hover:text-white text-black font-bold py-3 px-6 rounded  transition-all border uppercase text-sm">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Hero;
