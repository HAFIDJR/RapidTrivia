import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Dashboard/Home";
import PreparationQuiz from "./pages/PrepareQuiz/PreparationQuiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/preparation" element={<PreparationQuiz />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
