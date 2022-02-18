import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import "./App.css";
// Routes
import AboutUs from "./components/company/about-us/AboutUs";
import Services from "./components/company/services/Services";
import AdminDashboard from "./components/admin/admin-dashboard/AdminDashboard";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AdminSignUp from "./components/auth/AdminSignUp";
import BookAppointmentModal from "./components/users/appointments/BookAppointmentModal";
import Page404 from "./components/Page404/Page404";

function App() {
  const isAppointmentModalActive = useSelector((state) => state.isAppointmentModalActive);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
          <Route path="/users/signup" element={<SignUp />} />
          <Route path="/users/login" element={<Login adminTitle="" />} />
          <Route path="/admin/signup" element={<AdminSignUp />} />
          <Route path="/admin/login" element={<Login adminTitle="Admin" />} /> {/* Send prop down to Login comp */}
          <Route element={<Page404 />} />
        </Routes>
        {isAppointmentModalActive ? <BookAppointmentModal /> : null}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
