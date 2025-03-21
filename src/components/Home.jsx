import React, { useState } from "react";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50">
        {/* Left Side - Logo & University Name */}
        <div className="flex items-center space-x-3">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="University Logo"
            className="w-10 h-10"
          />
          <span className="text-lg font-semibold text-gray-700">
            Uva Wellassa University
          </span>
        </div>

        {/* Right Side - Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#" className="hover:text-blue-500">Calendar</a>
          <a href="#" className="hover:text-blue-500">Courses</a>
          <a href="#" className="hover:text-blue-500">Profile</a>
          <a href="#" className="hover:text-blue-500">Quizzes</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 bg-white shadow-md flex flex-col w-48 text-gray-700">
            <a href="#" className="px-4 py-2 hover:bg-gray-100">Calendar</a>
            <a href="#" className="px-4 py-2 hover:bg-gray-100">Courses</a>
            <a href="#" className="px-4 py-2 hover:bg-gray-100">Quizzes</a>
            <a href="#" className="px-4 py-2 hover:bg-gray-100">Profile</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gray-100 mt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to the Virtual Learning Environment
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Your one-stop platform for courses, quizzes, and academic resources.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Uva Wellassa University. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
