import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Drawing from "./pages/drawing";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/drawing" component={Drawing} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
