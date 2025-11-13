import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user, updateProfileFunc, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
  });

  // 
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",

        email: user.email || "",

        photo: user.photoURL || "",
      });
    }
  }, [user]);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      //1 fire auth update
      await updateProfileFunc(formData.name, formData.photo);

      // l up
      setUser({
        ...user,
        displayName: formData.name,
        photoURL: formData.photo,
      });

      //  mongooDB update
      const res = await fetch(`http://localhost:3000/users/${user.email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      // console.log("MongoDB update:", data);

      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (error) {
      // console.error(error);
      alert("Failed to update profile");
    }
  };

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded-lg bg-white mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>

      {editMode ? (
        <>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="input input-bordered w-full mb-2"
          />
          <input
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            placeholder="Photo URL"
            className="input input-bordered w-full mb-2"
          />
          <button
            onClick={handleUpdate}
            className="btn btn-success w-full mt-2"
          >
            Save Changes
          </button>
        </>
      ) : (
        <div className="text-center">
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold">
            {user.displayName || "User"}
          </h3>
          <p>{user.email}</p>
          <button
            onClick={() => setEditMode(true)}
            className="btn btn-primary mt-4"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;

