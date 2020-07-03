import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home";
import NavBar from "../Navbar/NavBar";
import Products from "../Products";
import Carousel from "../Carousel";
import Services from "../Services.jsx";
import Conferences from "../Conferences";
import RelationPresse from "../RelationPresse";
import Partenaires from "../Partenaires";
import LookUp from "../LookUp";
import styles from "./Router.module.css";

export default function Router() {
  return (
    <div className={styles.navRow}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/carousel" component={Carousel} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/conferences" component={Conferences} />
          <Route exact path="/relationpresse" component={RelationPresse} />
          <Route exact path="/partenaires" component={Partenaires} />
          <Route exact path="/info" component={LookUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
