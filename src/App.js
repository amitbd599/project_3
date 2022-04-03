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

function App() {
  return (
    <div className="App">
      <Router>
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
          
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
