import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Dashboard/Home";
import PreparationQuiz from "./pages/PrepareQuiz/PreparationQuiz";
import AssesmentQuiz from "./pages/QuizAssesment/AssesmentQuiz";
import ResultQuiz from "./pages/ResultQuiz/ResultQuiz";
import Quiz from "./pages/Dashboard/Quiz";
import Error from "./pages/404/Error";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ProtectedRoute from "./utils/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/preparation" element={<PreparationQuiz />} />
          <Route path="/results" element={<ResultQuiz />} />
        </Route>
        <Route
          path="/assessment"
          element={
            <ProtectedRoute>
              <AssesmentQuiz />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
