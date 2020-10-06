import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/header/Header";
import AboutUs from "./components/company/about-us/AboutUs";
import Footer from "./components/layout/footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={AboutUs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
