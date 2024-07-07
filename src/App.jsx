import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./assets/style.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import { useEffect, useState } from "react";
import Courses from "./components/Courses/Courses";

function App() {
  const location = useLocation();
  const [activateLayout, setActivateLayout] = useState(true);
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setActivateLayout(false);
    } else {
      setActivateLayout(true);
    }
  }, []);

  return (
    <>
      {activateLayout ? <Header /> : ""}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {activateLayout ? <Footer /> : ""}
    </>
  );
}

export default App;
