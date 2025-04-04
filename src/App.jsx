import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Calendar from "react-calendar";
import Login from "./components/Login";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Profile from "./components/Profile"; // Import Profile Component
import Courses from "./components/Courses";
import JoinLecture from "./components/Joinlecture";
import CalendarPage from "./components/CalendarPage";
import Module from "./components/Module";
import Discussion from "./components/Discussion";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set default to true

  return (
    <Routes>
      {/* Always allow access to home */}
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
      <Route path="/courses" element={isAuthenticated ? <Courses /> : <Navigate to="/login" />} />
      <Route path="/module" element={isAuthenticated ? <Module /> : <Navigate to="/login" />} />
      <Route path="/calender" element={isAuthenticated ? <CalendarPage /> : <Navigate to="/login" />} />
      <Route path="/join" element={isAuthenticated ? <JoinLecture/> : <Navigate to="/login" />} />
      <Route path="/discussion" element={isAuthenticated ? <Discussion/> : <Navigate to="/login" />} />
      <Route path="/quiz" element={isAuthenticated ? <Quiz /> : <Navigate to="/login" />} />
      <Route path="/results" element={isAuthenticated ? <Result /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;