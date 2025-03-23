import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Courses from "./components/Courses"; // Courses Page
import Profile from "./components/Profile"; // Profile Page
import More from "./components/More"; // More Page
import Quiz from "./components/Quiz"; // Quiz Page
import Result from "./components/Result"; // Result Page

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path="/*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/more" element={<More />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Result />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
