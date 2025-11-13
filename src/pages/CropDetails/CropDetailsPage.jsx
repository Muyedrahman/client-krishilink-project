import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const CropDetailsPage = () => {
  const crop = useLoaderData();
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [interests, setInterests] = useState(crop.interests || []);
  const [showModal, setShowModal] = useState(false);

  const isOwner = crop?.owner?.ownerEmail === user?.email;
  const hasSentInterest = interests.some((i) => i.userEmail === user?.email);
  const totalPrice = quantity * crop.pricePerUnit;

  const handleSubmitInterest = async () => {
    if (quantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    const newInterest = {
      cropId: crop._id,
      userEmail: user.email,
      userName: user.displayName,
      quantity,
      message,
      status: "pending",
    };

    setSubmitting(true);
    try {
      const res = await axios.post(
        `http://localhost:3000/crops/${crop._id}/interests`,
        newInterest
      );
      if (res.data.success) {
        setInterests([
          ...interests,
          { _id: res.data.interestId, ...newInterest },
        ]);
        alert("Interest submitted successfully!");
        setShowModal(false);
      }
    } catch (error) {
      // console.error(error);
      alert("Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdateStatus = async (interestId, status) => {
    try {
      const res = await axios.patch(
        `http://localhost:3000/crops/${crop._id}/interests/${interestId}`,
        { status }
      );
      if (res.data.success) {
        setInterests(
          interests.map((i) => (i._id === interestId ? { ...i, status } : i))
        );
      }
    } catch (error) {
      // console.error(error);
      alert("Failed to update status");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 my-10 bg-white rounded-xl shadow-md">
      {/* cropss info */}
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={crop.image}
          alt={crop.name}
          className="w-full h-80 object-cover rounded-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{crop.name}</h2>
          <p className="text-gray-700">{crop.description}</p>
          <p className="mt-2 font-medium text-green-600">
            Price: ${crop.pricePerUnit}/{crop.unit}
          </p>
          <p>
            Quantity: {crop.quantity} {crop.unit}
          </p>
          <p>Location: {crop.location}</p>
          <p className="text-sm mt-1 text-gray-500">
            Posted by: {crop.owner?.ownerName}
          </p>
        </div>
      </div>

      {/* interest form no owww */}
      {!isOwner && !hasSentInterest && (
        <>
          <div className="mt-8 space-y-4">
            <h3 className="text-2xl font-semibold text-green-700">
              Send Your Interest
            </h3>
            <input
              type="number"
              placeholder="Quantity (kg)"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Write a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea textarea-bordered w-full"
            />
            <p className="text-green-600 font-semibold">
              Total Price: ${totalPrice}
            </p>
            <button
              type="button"
              className="btn bg-green-600 text-white hover:bg-green-700"
              onClick={() => setShowModal(true)}
            >
              Submit Interest
            </button>
          </div>

          {/*moodal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
                <h3 className="text-lg font-semibold mb-4">Confirm Interest</h3>
                <p>
                  Are you sure you want to submit your interest for {quantity} {crop.unit}?
                </p>
                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    className="btn btn-gray"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn bg-green-600 text-white"
                    onClick={handleSubmitInterest}
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Confirm"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* mmessage  */}
      {!isOwner && hasSentInterest && (
        <p className="mt-8 text-yellow-600 font-semibold">
          You've already sent an interest for this crop ..
        </p>
      )}

      {/* received intrasst*/}
      {isOwner && (
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">
            Received Interests
          </h3>
          {interests.length === 0 ? (
            <p>No interest requests yet</p>
          ) : (
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Buyer</th>
                  <th>Quantity</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {interests.map((i) => (
                  <tr key={i._id}>
                    <td>{i.userName}</td>
                    <td>{i.quantity}</td>
                    <td>{i.message}</td>
                    <td>{i.status}</td>
                    <td>
                      {i.status === "pending" && (
                        <>
                          <button
                            className="btn btn-xs bg-green-500 text-white mr-2"
                            onClick={() =>
                              handleUpdateStatus(i._id, "accepted")
                            }
                          >
                            Accept
                          </button>
                          <button
                            className="btn btn-xs bg-red-500 text-white"
                            onClick={() =>
                              handleUpdateStatus(i._id, "rejected")
                            }
                          >
                            Rejecte d
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default CropDetailsPage;
