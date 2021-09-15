import React from "react";
import './index.css';
import Footer from "./components/MainSite/Home/Footer";
import Home from "./components/MainSite/Home/Home";
import AboutUs from "./components/MainSite/AboutUs/AboutUs";
import Prices from "./components/MainSite/Prices/Prices";
import Terms from "./components/MainSite/TermsAndConditions/Terms";
import AboutSecondSection from "./components/MainSite/AboutUs/AboutSecondSection";
import Privacy from "./components/MainSite/PrivacyPolicy/Privacy";
import Navbar from "./components/MainSite/Home/Navbar/Navbar";
import StoreForm from "./components/MainSite/StoreForm/StoreForm";
import CalleeTest from "./components/MainSite/CalleeTest/CalleeTest";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ScrollToTop from "./components/MainSite/Home/component/ScrollToTop";

function App() {
  return (
    <Router>
    <ScrollToTop />
      <div className="App">
        <Navbar />
          <div className="content-wrap">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/nosotros" exact component={AboutUs} />
                <Route path="/precios" exact component={Prices} />
                <Route path="/terminos-y-condiciones" exact component={Terms} />
                <Route path="/politica-de-privacidad" exact component={Privacy} />
                <Route path="/:storedLink" exact component={StoreForm} />
                <Route path="/callee/test" exact component={CalleeTest} />
              </Switch>
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
