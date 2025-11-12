import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyPosts = () => {

  const { user } = useContext(AuthContext);
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editCrop, setEditCrop] = useState(null);
  const [sortKey, setSortKey] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc"); 

  // fetch crops
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

  //del crop
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

  // open-edit-modal
  const openEditModal = (crop) => {
    setEditCrop(crop);
  };

  // handle form change
  const handleEditChange = (e) => {
    setEditCrop({ ...editCrop, [e.target.name]: e.target.value });
  };

  // update
  const handleUpdateCrop = async () => {
    try {
      const { _id, ...updatedData } = editCrop;
      const res = await axios.put(
        `http://localhost:3000/crops/${_id}`,
        updatedData
      );
      if (res.data.modifiedCount > 0) {
        setCrops(crops.map((c) => (c._id === _id ? editCrop : c)));
        toast.success("Crop updated successfully");
        setEditCrop(null);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update crop");
    }
  };

  // Sor
  const sortedCrops = [...crops].sort((a, b) => {
    if (sortOrder === "asc") return a[sortKey] > b[sortKey] ? 1 : -1;
    else return a[sortKey] < b[sortKey] ? 1 : -1;
  });





  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-green-700">My Posts</h2>

      {/* 1 */}
      <div className="mb-4 flex gap-4 items-center">
        <span>Sort by:</span>
        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
          className="input input-bordered"
        >
          <option value="name">Name</option>
          <option value="type">Type</option>
          <option value="pricePerUnit">Price</option>
          <option value="quantity">Quantity</option>
        </select>
        <button
          className="btn btn-sm"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? "Asc" : "Desc"}
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : sortedCrops.length === 0 ? (
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
            {sortedCrops.map((crop) => (
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
                    onClick={() => openEditModal(crop)}
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

      {/* 2 */}
      {editCrop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Edit Crop
            </h3>
            <input
              name="name"
              value={editCrop.name}
              onChange={handleEditChange}
              className="input input-bordered w-full mb-2"
              placeholder="Name"
            />
            <input
              name="type"
              value={editCrop.type}
              onChange={handleEditChange}
              className="input input-bordered w-full mb-2"
              placeholder="Type"
            />
            <input
              name="pricePerUnit"
              value={editCrop.pricePerUnit}
              onChange={handleEditChange}
              type="number"
              className="input input-bordered w-full mb-2"
              placeholder="Price"
            />
            <input
              name="quantity"
              value={editCrop.quantity}
              onChange={handleEditChange}
              type="number"
              className="input input-bordered w-full mb-2"
              placeholder="Quantity"
            />
            <input
              name="unit"
              value={editCrop.unit}
              onChange={handleEditChange}
              className="input input-bordered w-full mb-2"
              placeholder="Unit"
            />
            <input
              name="location"
              value={editCrop.location}
              onChange={handleEditChange}
              className="input input-bordered w-full mb-2"
              placeholder="Location"
            />
            <input
              name="image"
              value={editCrop.image}
              onChange={handleEditChange}
              className="input input-bordered w-full mb-2"
              placeholder="Image URL"
            />
            <textarea
              name="description"
              value={editCrop.description}
              onChange={handleEditChange}
              className="textarea textarea-bordered w-full mb-2"
              placeholder="Description"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                className="btn btn-gray"
                onClick={() => setEditCrop(null)}
              >
                Cancel
              </button>
              <button
                className="btn bg-green-600 text-white"
                onClick={handleUpdateCrop}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPosts;