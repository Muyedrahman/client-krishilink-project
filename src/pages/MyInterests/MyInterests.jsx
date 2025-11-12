import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyInterests = () => {

    const { user } = useContext(AuthContext);
    const [interests, setInterests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchInterests = async () => {
        try {
          const res = await axios.get("http://localhost:3000/crops");
          const myInterests = [];
          res.data.forEach((crop) => {
            crop.interests?.forEach((interest) => {
              if (interest.userEmail === user.email) {
                myInterests.push({
                  ...interest,
                  cropName: crop.name,
                  cropId: crop._id,
                });
              }
            });
          });
          setInterests(myInterests);
        } catch (error) {
          console.error(error);
          toast.error("Failed to load interests");
        } finally {
          setLoading(false);
        }
      };
      fetchInterests();
    }, [user.email]);




    return (
      <div className="max-w-5xl mx-auto p-6 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-green-600">My Interests</h2>
        {loading ? (
          <p>Loading...</p>
        ) : interests.length === 0 ? (
          <p>No interests found</p>
        ) : (
          <table className="table w-full border">
            <thead>
              <tr>
                <th>Crop</th>
                <th>Owner</th>
                <th>Quantity</th>
                <th>Message</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {interests.map((i) => (
                <tr key={i._id}>
                  <td>{i.cropName}</td>
                  <td>{i.ownerName || "N/A"}</td>
                  <td>{i.quantity}</td>
                  <td>{i.message}</td>
                  <td>{i.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
};

export default MyInterests;