import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./assets/style.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import { useEffect, useState } from "react";
import Courses from "./components/Courses/Courses";
import Requirements from "./components/Requirements/Requirements";
import Error from "./components/Error/Error";
import Jobs from "./components/Jobs/Jobs";
import ContactUs from "./components/ContactUs/ContactUs";
import Application from "./components/Application/Application";
import ConfirmModal from "./components/Modal/ConfirmModal";

function App() {
  const location = useLocation();
  const [activateLayout, setActivateLayout] = useState(true);
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setActivateLayout(false);
    } else {
      setActivateLayout(true);
    }
  }, []);

  return (
    <>
      {activateLayout ? <Header location={location} /> : ""}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/courses"
          element={
            <Courses
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          }
        />
        <Route
          path="/jobs"
          element={
            <Jobs
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          }
        />
        <Route path="/courses/:id" element={<Requirements />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/application"
          element={<Application setActiveModal={setActiveModal} />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <ConfirmModal setActiveModal={setActiveModal} activeModal={activeModal} />

      {activateLayout ? <Footer /> : ""}
    </>
  );
}

export default App;
