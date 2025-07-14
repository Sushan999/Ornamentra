import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user data:", error);
        setUser(null);
        localStorage.removeItem("user"); // clear corrupted data
      }
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500">No user logged in</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-20 px-4">
      <div className="w-full max-w-xl   rounded-lg p-6">
        <div className="flex flex-col items-center">
          <img
            src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`}
            alt="Avatar"
            className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 shadow"
          />
          <h2 className="mt-4 text-2xl font-semibold">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between text-sm text-gray-700">
            <span className="font-medium">Phone:</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <span className="font-medium">Date of Birth:</span>
            <span>{user.dob}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="px-6 py-2 text-sm font-semibold text-white bg-black rounded hover:bg-gray-800 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
