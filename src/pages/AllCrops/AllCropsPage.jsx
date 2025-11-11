import React from 'react';
import { Link, useLoaderData } from 'react-router';
import CardCrops from '../../components/CardCrops';

const AllCropsPage = () => {
  const data = useLoaderData();
  console.log(data);
    return (
      <div>
        <section className="my-10 px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            <i className="text-yellow-500"> All Crop</i>
          </h2>
          <p className="text-green-600 text-center mb-6 text-lg font-medium">
            Fresh & Latest Crops from Farmers
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((crop) => (
              <CardCrops key={crop._id} crop={crop} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-yellow-400 transition"
            >
              Back to Hom
            </Link>
          </div>
        </section>
      </div>
    );
};

export default AllCropsPage;