import React, { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import CardCrops from "../../components/CardCrops";

const AllCropsPage = () => {
  const cropsData = useLoaderData(); 
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCrops, setFilteredCrops] = useState(cropsData);

  useEffect(() => {
    //search term
    const filtered = cropsData.filter((crop) =>
      crop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCrops(filtered);
  }, [searchTerm, cropsData]);

  return (
    <section className="my-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        <i className="text-yellow-500"> All Crop</i>
      </h2>

      
      <div className="flex justify-center mb-8">
       
        <input
          type="text"
          placeholder="Type here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
      </div>

      {filteredCrops.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCrops.map((crop) => (
            <CardCrops key={crop._id} crop={crop} />
          ))}
        </div>
      ) : (
        <p className="text-center font-bold text-red-300 mt-10">
          no results found
        </p>
      )}

      <div className="mt-8 text-center">
        <Link
          to="/"
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-yellow-400 transition"
        >
          Back to Hom
        </Link>
      </div>
    </section>
  );
};

export default AllCropsPage;

// import React from 'react';
// import { Link, useLoaderData } from 'react-router';
// import CardCrops from '../../components/CardCrops';

// const AllCropsPage = () => {
//   const data = useLoaderData();
//   console.log(data);
//     return (
//       <div>
//         <section className="my-10 px-4">
//           <h2 className="text-3xl font-bold mb-2 text-center">
//             
//           </h2>
//           <p className="text-green-600 text-center mb-6 text-lg font-medium">
//             Fresh & Latest Crops from Farmers
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {data.map((crop) => (
//               <CardCrops key={crop._id} crop={crop} />
//             ))}
//           </div>

//           <div className="mt-8 text-center">
//             <Link
//               to="/"
//               className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-yellow-400 transition"
//             >
//               View Details
//             </Link>
//           </div>
//         </section>
//       </div>
//     );
// };

// export default AllCropsPage;
