import React from "react";
import { FaBoxOpen, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardCrops = ({ crop }) => {
  const {
    _id,
    name,
    type,
    pricePerUnit,
    unit,
    quantity,
    description,
    location,
    image,
  } = crop;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
     
      <figure className="h-48 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{name}</h2>
        <div className="badge badge-secondary text-xs px-3 py-1 rounded-full">
          {type}
        </div>

        <p className="text-gray-600 text-sm mt-2">
          Price PerUnit : ${pricePerUnit}/{unit}
        </p>
        <p className="text-gray-600 text-sm flex items-center gap-1">
          <FaBoxOpen className="text-blue-500" /> Quantity: {quantity} {unit}
        </p>
        <p className="text-gray-600 text-sm flex items-center gap-1">
          <FaMapMarkerAlt className="text-red-500" /> Location: {location}
        </p>

        <p className="line-clamp-2 text-gray-700 text-sm mt-2">{description}</p>

        
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/crop/${_id}`}
            className="btn btn-sm bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white rounded-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCrops;
