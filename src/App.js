import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";

import Navbar from './Components/Views/Navbar/Navbar';
import Footer from './Components/Views/Footer/Footer';
import LandingPage from './Components/Views/LandingPage/LandingPage';
import Features from './Components/Views/Brand/Features/Features';
import Introduction from './Components/Views/Brand/Introduction/Introduction';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/introduction" component={Introduction} />
          <Route exact path="/features" component={Features} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App

