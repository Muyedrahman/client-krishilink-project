import React from 'react';
import { RiCalendarEventLine, RiMapPinLine } from 'react-icons/ri';

const AgroEvents = () => {
    return (
      <div className="py-16 bg-green-100">
        {/* 1 */}
        <h2 className="text-3xl font-bold text-center mb-10 flex justify-center items-center gap-2">
          <RiCalendarEventLine className="text-green-600 text-4xl" />
          <i className="text-yellow-500">Upcoming Agro Events & Workshops</i>
        </h2>

        {/* 2*/}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-6">
          {/* e1 */}
          <div className="card bg-white p-6 shadow-md hover:shadow-lg rounded-xl text-center flex-1">
            <img
              className="rounded-lg mb-4 h-48 w-full object-cover"
              src="https://i.ibb.co.com/mZQ9BzT/farm-workshop.jpg"
              alt="img"
            />
            <h3 className="font-semibold text-lg mb-1">
              Organic Farming Workshop
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              <RiCalendarEventLine className="inline-block mr-1" />
              15 Jan 2026
            </p>
            <p className="text-sm text-gray-500 mb-3">
              <RiMapPinLine className="inline-block mr-1" />
              Chittagong
            </p>
            <button className="text-green-600 font-medium hover:underline">
              Learn More...
            </button>
          </div>

          {/* E 2 */}
          <div className="card bg-white p-6 shadow-md hover:shadow-lg rounded-xl text-center flex-1">
            <img
              className="rounded-lg mb-4 h-48 w-full object-cover"
              src="https://i.ibb.co.com/cSNDpNx8/agri-Tech.jpg"
              alt="imgg"
            />
            <h3 className="font-semibold text-lg mb-1">Agri-Tech Expo 2026</h3>
            <p className="text-sm text-gray-500 mb-1">
              <RiCalendarEventLine className="inline-block mr-1" />
              26 Mar 2026
            </p>
            <p className="text-sm text-gray-500 mb-3">
              <RiMapPinLine className="inline-block mr-1" />
              Khulna
            </p>
            <button className="text-green-600 font-medium hover:underline">
              Learn More...
            </button>
          </div>

          {/* e 3 */}
          <div className="card bg-white p-6 shadow-md hover:shadow-lg rounded-xl text-center flex-1">
            <img
              className="rounded-lg mb-4 h-48 w-full object-cover"
              src="https://i.ibb.co.com/1tfQRd8j/organic-farming.jpg"
              alt="img."
            />
            <h3 className="font-semibold text-lg mb-1">
              Organic Farming Masterclass
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              <RiCalendarEventLine className="inline-block mr-1" />5 Aug 2026
            </p>
            <p className="text-sm text-gray-500 mb-3">
              <RiMapPinLine className="inline-block mr-1" />
              Dhaka
            </p>
            <button className="text-green-600 font-medium hover:underline">
              Learn More ....
            </button>
          </div>
        </div>
      </div>
    );
};

export default AgroEvents;