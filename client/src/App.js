import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import "./App.css";
// Routes
import AboutUs from "./components/company/about-us/AboutUs";
import AdminDashboard from "./components/admin/admin-dashboard/AdminDashboard";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={AboutUs} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
