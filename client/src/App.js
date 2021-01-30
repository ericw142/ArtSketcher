import React, {useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Footer from "./components/footer";

import Context from "./utils/Context";

function App() {
  const [context, setContext] = useState({
    username: ""
  })

  return (

      <Router>
        <div className="App">
          <Navbar />
          
            <Context.Provider value={[context, setContext]}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/profile" component={Profile}/>
                  <Footer />
            </Context.Provider>
         
        </div>
      </Router>

  );
}

export default App;
