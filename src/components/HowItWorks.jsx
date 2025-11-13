import React from 'react';
import {
  RiLeafLine,
  RiPlantLine,
  RiTeamLine,
  RiUserAddLine,
 
} from "react-icons/ri";


const HowItWorks = () => {
    return (
      <div className="py-16 bg-base-100">
        <h2 className="text-3xl font-bold text-center mb-10 flex justify-center items-center gap-2">
          <RiLeafLine className="text-green-600 text-4xl" />
          <i className='text-yellow-500'> How KrishiLink Works</i>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-6">
          <div className="card bg-green-50 p-6 shadow-md hover:shadow-lg rounded-xl text-center flex-1">
            <RiUserAddLine className="text-green-600 text-5xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Create Your Profile</h3>
            <p className="text-sm text-gray-600">
              Farmers, traders, and buyers can register to join the KrishiLink
              community.
            </p>
          </div>

          <div className="card bg-green-50 p-6 shadow-md hover:shadow-lg rounded-xl text-center flex-1">
            <RiPlantLine className="text-green-600 text-5xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">
              Post Crops or Products
            </h3>
            <p className="text-sm text-gray-600">
              Share what you're growing or selling — from vegetables to
              fertilizers.
            </p>
          </div>

          <div className="card bg-green-50 p-6 shadow-md hover:shadow-lg rounded-xl text-center flex-1">
            <RiTeamLine className="text-green-600 text-5xl mx-auto mb-3" />

            <h3 className="font-semibold text-lg mb-2">
              Connect & Collaborate
            </h3>
            <p className="text-sm text-gray-600">
              Browse others' posts and connect directly to trade or collaborate
              easily.
            </p>
          </div>
        </div>
      </div>
    );
};

export default HowItWorks;