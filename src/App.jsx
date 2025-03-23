import { Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/results" element={<Result />} />
    </Routes>
  );
}

export default App;