import { BrowserRouter, Route, Routes } from "react-router-dom";
import BelowTenPage from "../pages/BelowTen";
import Home from "../pages/Home";
import OverTenPage from "../pages/OverTen";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/below-ten" element={<BelowTenPage />} />
        <Route path="/over-ten" element={<OverTenPage />} />
      </Routes>
    </BrowserRouter>
  );
}
