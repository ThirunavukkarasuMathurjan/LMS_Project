import React, { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    firstName: "Peter",
    lastName: "John",
    enrollmentNo: "123456",
    degree: "Computer Science",
    email: "john.doe@example.com",
    phone: "+123456789",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    profilePic: "https://via.placeholder.com/150",
    coverImage: "https://via.placeholder.com/800x200",
  });

  const [editing, setEditing] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      {/* Cover Image */}
      <div className="relative w-full max-w-4xl h-56">
        <img
          src={user.coverImage}
          alt="Cover"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Profile Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full mt-8">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              ["First Name", "firstName"],
              ["Last Name", "lastName"],
              ["Enrollment No", "enrollmentNo"],
              ["Degree", "degree"],
              ["Email", "email"],
              ["Phone No", "phone"],
              ["LinkedIn", "linkedin"],
              ["GitHub", "github"],
            ].map(([label, name]) => (
              <div key={name}>
                <label className="block text-gray-700 font-semibold">
                  {label}
                </label>
                <input
                  type="text"
                  name={name}
                  value={user[name]}
                  onChange={handleChange}
                  disabled={!editing}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:bg-gray-200"
                />
              </div>
            ))}
          </div>

          {/* Password Change Section */}
          <div className="grid grid-cols-3 gap-4">
            {[
              ["Current Password", "currentPassword"],
              ["New Password", "newPassword"],
              ["Confirm Password", "confirmPassword"],
            ].map(([label, name]) => (
              <div key={name}>
                <label className="block text-gray-700 font-semibold">
                  {label}
                </label>
                <input
                  type="password"
                  name={name}
                  value={passwords[name]}
                  onChange={handlePasswordChange}
                  disabled={!editing}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:bg-gray-200"
                />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-4">
            {editing ? (
              <button
                onClick={() => setEditing(false)}
                className="px-6 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
