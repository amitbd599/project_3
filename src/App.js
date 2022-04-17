import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './default.css';
import './Css/App.css';
import Home from "./Page/Home";
import Shop_Page from "./Page/Shop_Page";
import Cart_Page from "./Page/Cart_Page";
import AboutPage from "./Page/AboutPage";
import Blog from "./Page/Blog";
import SingleBlog from "./Page/SingleBlog";
import Gallery from "./Page/Gallery";
import Faq from "./Page/Faq";
import Contact from "./Page/Contact";
import ScrollToTop from "./Components/Universal_Components/ScrollToTop";
import './Custom';

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop-page">
            <Shop_Page />
          </Route>
          <Route exact path="/cart">
            <Cart_Page />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/single-blog">
            <SingleBlog />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
