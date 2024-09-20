import React, { useState } from "react";
import { register } from "../services/authService";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password);
      setSuccess("Registration successful!");
      setError("");
    } catch (err) {
      setError(err);
      setSuccess("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex md:w-1/2 bg-blue-600 text-white justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
            <p className="mb-2">Join us and explore amazing features.</p>
          </div>
        </div>

        {/* Right Side (Registration Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                type="text"
                id="username"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                type="email"
                id="email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                type="password"
                id="password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold rounded-md p-2 hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
