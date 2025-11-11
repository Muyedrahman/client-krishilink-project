import React from "react";
import CardCrops from "./CardCrops";
import { Link, useLoaderData } from "react-router";


const LatestCrops = () => {
  // || []
  const data = useLoaderData();
  console.log(data);

  return (
    <section className="my-10 px-4">
      <h2 className="text-3xl font-bold mb-2 text-center">
        <i className="text-yellow-500"> Latest Crop Posts</i>
      </h2>
      <p className="text-green-600 text-center mb-6 text-lg font-medium">
        {/* <Planet size={32} color="green" /> */}
        Fresh & Latest Crops
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.slice(0, 6).map((crop) => (
          <CardCrops key={crop._id} crop={crop} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/all-crops"
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
        >
          View All Crops
        </Link>
      </div>
    </section>
  );
};

export default LatestCrops;

