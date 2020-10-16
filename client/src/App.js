import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import "./App.css";
// Routes
import AboutUs from "./components/company/about-us/AboutUs";
import Services from "./components/company/services/Services";
import AdminDashboard from "./components/admin/admin-dashboard/AdminDashboard";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={AboutUs} />
          <Route path="/services" component={Services} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/users/login" component={Login} />
          <Route path="/users/signup" component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
