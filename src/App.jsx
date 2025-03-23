import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path="/*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Quiz />} />
          <Route path="/results" element={<Result />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default App;