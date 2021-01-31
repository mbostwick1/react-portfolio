import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from './pages/Contact';
import About from "./pages/About";

function App() {
  return (
    <Router>
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
    </Router>
  );
}

export default App;