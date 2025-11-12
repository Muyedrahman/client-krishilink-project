import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCrop = () => {

   const { user } = useContext(AuthContext);
   const navigate = useNavigate();

   const [formData, setFormData] = useState({
     name: "",
     type: "",
     pricePerUnit: "",
     unit: "",
     quantity: "",
     description: "",
     location: "",
     image: "",
   });

   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
     e.preventDefault();

     const newCrop = {
       ...formData,
       owner: {
         ownerEmail: user.email,
         ownerName: user.displayName,
       },
       interests: [],
     };

     try {
       const res = await axios.post("http://localhost:3000/crops", newCrop);
       if (res.data.insertedId) {
         toast.success("Crop added successfully!");
         navigate("/my-posts");
       }
     } catch (error) {
       console.error(error);
       toast.error("Failed to add crop");
     }
   };














  return (

    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-green-700">Add New Crop</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Crop Name"
          className="input input-bordered w-full"
          required
        />
        <input
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Type (Vegetable, Fruit, Grain)"
          className="input input-bordered w-full"
          required
        />
        <input
          name="pricePerUnit"
          value={formData.pricePerUnit}
          onChange={handleChange}
          type="number"
          placeholder="Price per unit"
          className="input input-bordered w-full"
          required
        />
        <input
          name="unit"
          value={formData.unit}
          onChange={handleChange}
          placeholder="Unit (kg, ton, bag)"
          className="input input-bordered w-full"
          required
        />
        <input
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          type="number"
          placeholder="Estimated quantity"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          required
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered w-full"
        />

        <button
          type="submit"
          className="btn bg-green-600 text-white w-full"
        >
          Add Crop
        </button>
      </form>
    </div>
  );
};

export default AddCrop;