import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Dashboard/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
