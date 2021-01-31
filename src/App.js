import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Contact" component={Contact} />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
