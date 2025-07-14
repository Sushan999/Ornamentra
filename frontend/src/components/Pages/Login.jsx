import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );

      // Depending on your backend, user info might be in response.data.data or response.data.user
      // Adjust accordingly:
      const userData = response.data.data || response.data.user;

      if (!userData) {
        alert("Login successful but user data missing.");
        return;
      }

      localStorage.setItem("user", JSON.stringify(userData));

      alert(response.data.message || "Login successful");

      // Redirect to profile page
      navigate("/profile");
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      alert("Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/user/register",
        formData
      );
      alert(data.message || "Registration successful");
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      alert(
        "Registration failed: " + (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="h-[90vh] flex justify-center items-center bg-white mt-40">
      <div className="w-full max-w-4xl px-6">
        {/* Tab Switcher */}
        <div className="flex space-x-6 mb-8">
          <button
            onClick={() => setActiveTab("signin")}
            className={`pb-2 border-b-2 text-sm font-semibold tracking-wide transition-colors ${
              activeTab === "signin"
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`pb-2 border-b-2 text-sm font-semibold tracking-wide transition-colors ${
              activeTab === "signup"
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content-wrapper min-h-[600px]">
          {activeTab === "signin" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="EMAIL"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="w-full p-4 bg-gray-100 text-sm font-medium rounded"
              />
              <input
                type="password"
                placeholder="PASSWORD"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full p-4 bg-gray-100 text-sm font-medium rounded"
              />
              <button
                type="submit"
                className="w-full p-4 bg-black text-white text-sm uppercase tracking-wide font-bold rounded hover:bg-gray-900 transition"
              >
                Submit
              </button>
            </form>
          )}

          {activeTab === "signup" && (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                  className="p-4 bg-gray-100 text-sm font-medium rounded"
                />
                <input
                  type="text"
                  placeholder="LAST NAME"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                  className="p-4 bg-gray-100 text-sm font-medium rounded"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="p-4 bg-gray-100 text-sm font-medium rounded"
                />
                <input
                  type="date"
                  value={formData.dob}
                  onChange={(e) =>
                    setFormData({ ...formData, dob: e.target.value })
                  }
                  required
                  className="p-4 bg-gray-100 text-sm font-medium rounded"
                />
              </div>

              <input
                type="tel"
                placeholder="MOBILE"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="w-full p-4 bg-gray-100 text-sm font-medium rounded"
              />

              <input
                type="password"
                placeholder="PASSWORD"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                className="w-full p-4 bg-gray-100 text-sm font-medium rounded"
              />

              <button
                type="submit"
                className="w-full p-4 bg-black text-white text-sm uppercase font-bold tracking-wide rounded hover:bg-gray-900 transition"
              >
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
