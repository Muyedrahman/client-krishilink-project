import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyPosts = () => {

    const { user } = useContext(AuthContext);
    const [crops, setCrops] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchMyCrops = async () => {
        try {
          const res = await axios.get("http://localhost:3000/crops");
          const myCrops = res.data.filter(
            (crop) => crop.owner.ownerEmail === user.email
          );
          setCrops(myCrops);
        } catch (error) {
          console.error(error);
          toast.error("Failed to load crops");
        } finally {
          setLoading(false);
        }
      };
      fetchMyCrops();
    }, [user.email]);

    const handleDelete = async (id) => {
      if (!window.confirm("Are you sure to delete this crop?")) return;

      try {
        await axios.delete(`http://localhost:3000/crops/${id}`);
        setCrops(crops.filter((c) => c._id !== id));
        toast.success("Crop deleted successfully");
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete crop");
      }
    };


    return (
      <div className="max-w-5xl mx-auto p-6 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-green-700">My Posts</h2>
        {loading ? (
          <p>Loading...</p>
        ) : crops.length === 0 ? (
          <p>No crops found</p>
        ) : (
          <table className="table w-full border">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {crops.map((crop) => (
                <tr key={crop._id}>
                  <td>{crop.name}</td>
                  <td>{crop.type}</td>
                  <td>
                    {crop.pricePerUnit}/{crop.unit}
                  </td>
                  <td>{crop.quantity}</td>
                  <td className="flex gap-2">
                    <button
                      className="btn btn-xs bg-blue-500 text-white"
                      onClick={() => alert("Edit modal here")}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-xs bg-red-500 text-white"
                      onClick={() => handleDelete(crop._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
};

export default MyPosts;