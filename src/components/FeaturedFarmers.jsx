import React from 'react';
import { RiStarLine } from 'react-icons/ri';

const FeaturedFarmers = () => {
    return (
      <div className="py-16 bg-green-50">
        <h2 className="text-3xl font-bold text-center mb-10 flex justify-center items-center gap-2">
          <RiStarLine className="text-green-600 text-4xl" />

          {/* <i>Featured</i> */}
          <i className="text-yellow-500">Farmers & Success Stories</i>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-6">
          <div className="card bg-white p-6 shadow-md hover:shadow-lg rounded-xl text-center flex-1">
            <img
              className="rounded-lg mb-4 h-48 w-full object-cover"
              src="https://i.ibb.co.com/Fb7jZG5x/tomato1.jpg"
              alt="Mr. Rahim"
            />
            <h3 className="font-semibold text-lg mb-1">Rahim</h3>
            <p className="text-sm text-gray-500 mb-2">Bogura</p>
            <p className="text-sm text-gray-600 mb-3">
              Boosted tomato yield by 30% using KrishiLink's networking
            </p>
            <button className="text-green-600 font-medium hover:underline">
              Read More ...
            </button>
          </div>

          <div className="card bg-white p-6 shadow-md hover:shadow-lg rounded-xl text-center flex-1">
            <img
              className="rounded-lg mb-4 h-48 w-full object-cover"
              src="https://i.ibb.co.com/JWY0r2S4/vegetables.jpg"
              alt=""
            />
            <h3 className="font-semibold text-lg mb-1">Muyed Rahman</h3>
            <p className="text-sm text-gray-500 mb-2">Barishal</p>
            <p className="text-sm text-gray-600 mb-3">
              Successfully sold 500kg of organic vegetables via KrishiLink
            </p>
            <button className="text-green-600 font-medium hover:underline">
              Read More ...
            </button>
          </div>

          <div className="card bg-white p-6 shadow-md hover:shadow-lg rounded-xl text-center flex-1">
            <img
              className="rounded-lg mb-4 h-48 w-full object-cover"
              src="https://i.ibb.co.com/VWWwjDgZ/Cucumber7.jpg"
              alt=""
            />
            <h3 className="font-semibold text-lg mb-1">Mr. Karim</h3>
            <p className="text-sm text-gray-500 mb-2">Khulna</p>
            <p className="text-sm text-gray-600 mb-3">
              Expanded cucumber farm using modern techniques.
            </p>
            <button className="text-green-600 font-medium hover:underline">
              Read More ...
            </button>
          </div>
        </div>
      </div>
    );
};

export default FeaturedFarmers;