import React from "react";

const CarRentalHero = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">100+</h2>
              <p className="text-gray-400">Types of machines</p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">20k+</h2>
              <p className="text-gray-400">Clients served</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Rent the best cars
            </h1>
            <p className="text-gray-400 mb-6">
              We want you to have a stress-free rental experience, so we make it
              easy to hire a car—all while giving you great value for money.
              Find out how we make car rental simple.
            </p>
            <button className="bg-green-500 text-black font-bold py-2 px-6 rounded-full">
              Open Catalog
            </button>
            <img
              src="https://i.pinimg.com/originals/56/6c/50/566c5067853ed821ade77b7fa804d629.png"
              alt="Luxury Car"
              className="mt-8 -ml-20 sm:-ml-20 lg:-ml-60 w-full max-w-[100%]"
            />
          </div>
        </div>

        {/* Bottom Search Bar */}
        <div className="mt-12 bg-gray-800 rounded-full p-2 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="w-full sm:flex-1 px-4">
            <select className="bg-transparent text-black font-bold border-0 w-full outline-none py-2">
              <option>Coimbatore</option>
              <option>Kanyakumari</option>
              <option>Ooty</option>
              <option>Salem</option>
            </select>
          </div>

          <div className="w-full sm:flex-1 px-4 sm:border-l sm:border-r border-gray-700">
            <input
              type="date"
              className="bg-transparent text-white w-full py-2"
              placeholder="Pick-up date"
            />
          </div>
          <div className="w-full sm:flex-1 px-4">
            <input
              type="date"
              className="bg-transparent text-white w-full py-2"
              placeholder="Return date"
            />
          </div>
          <button className="w-full sm:w-auto bg-green-500 text-black font-bold py-2 px-6 rounded-full mt-4 sm:mt-0">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarRentalHero;
