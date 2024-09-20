import React, { useState } from "react";
import { login } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [token, setToken] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(email, password);
      setToken(token);
      setSuccess("Login successful!");
      setError("");
      localStorage.setItem("token", token);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    } catch (err) {
      setError(err.message);
      setSuccess("");
      setIsSubmitted(false);
    }
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen transition-all duration-500 ${
        isSubmitted ? "bg-blue-500" : "bg-gray-100"
      }`}
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-md p-2 hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        {token && <p className="mt-4">Token: {token}</p>}
      </div>
    </div>
  );
};

export default Login;
