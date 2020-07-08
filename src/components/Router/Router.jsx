import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "../Login";
import NavBar from "../Navbar/NavBar";
import Products from "../Products";
import Carousel from "../Carousel";
import Services from "../Services.jsx";
import Conferences from "../Conferences";
import RelationPresse from "../RelationPresse";
import Partenaires from "../Partenaires";
import LookUp from "../LookUp";
import styles from "./Router.module.css";
import ModalCarousel from "../builders/ModalCarousel";
import Home from "../Home";
import { reconnect } from "../../store/actionCreators";
import Repo from "../Repo";

function AuthRoute({ component: Component, ...rest }) {
  const token = useSelector((state) => state.admin.token);

  if (token) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <>
            <NavBar />
            <Component {...props} />
          </>
        )}
      />
    );
  }

  return <Redirect to="/login" />;
}

export default function Router() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token !== null) {
      dispatch(reconnect(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.navRow}>
      <BrowserRouter>
        <Switch>
          <AuthRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <AuthRoute path="/products" component={Products} />
          <AuthRoute path="/carousel" component={Carousel} />
          <AuthRoute path="/services" component={Services} />
          <AuthRoute path="/conferences" component={Conferences} />
          <AuthRoute path="/relationpresse" component={RelationPresse} />
          <AuthRoute path="/partenaires" component={Partenaires} />
          <AuthRoute path="/info" component={LookUp} />
          <AuthRoute path="/edit_modal" component={ModalCarousel} />
          <AuthRoute path="/repo" component={Repo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
