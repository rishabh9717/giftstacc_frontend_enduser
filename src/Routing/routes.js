import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";

function RouteConfiq() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage/>} 
        />
      </Routes>
    </Router>
  );
}
export default RouteConfiq;
