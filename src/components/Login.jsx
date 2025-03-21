import React, { useState } from "react";
import Home from "./Home"; // Import the Home component

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (username === "IIT30002" && password === "010101") {
      setIsAuthenticated(true); // Set authentication state to true
    } else {
      alert("Invalid username or password");
    }
  };

  if (isAuthenticated) {
    return <Home />; // Render the Home component upon successful login
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md py-4 px-6 fixed top-0 left-0 flex items-center">
        <img src="src/assets/UWU.jpg" alt="University Logo" className="w-12 h-12"/>
        <span className="ml-4 text-lg font-semibold text-gray-700">
          Virtual Learning Environment
        </span>
      </nav>

      {/* Login Container */}
      <div className="w-full max-w-4xl mt-20 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Login Form */}
        <div className="w-full md:w-1/2 p-10">
          <div className="text-center">
            <img src="src/assets/UWU.jpg" alt="logo" className="w-28 mx-auto"/>
            <h4 className="mt-4 text-2xl font-semibold">Uva Wellassa University</h4>
          </div>

          <p className="mt-4 text-gray-600 text-center">Please login to  VLE account</p>

          {/* Login Form */}
          <div className="mt-6">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label className="text-gray-700 text-left">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-5 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your username"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 text-left">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 text-center">
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
            >
              Sign in
            </button>
            <a href="#" className="block mt-2 text-gray-500 text-sm hover:underline text-right">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Right Section - Info */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10 flex-col justify-center">
          <h4 className="text-3xl font-semibold mb-6">We are more than just a company</h4>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
