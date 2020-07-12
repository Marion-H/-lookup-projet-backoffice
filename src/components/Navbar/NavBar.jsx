import React from "react";
import styles from "./NavBar.module.css";
import { Navbar, Nav, NavItem, NavbarText, Button } from "reactstrap";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { logout } from "../../store/actionCreators";

function NavBar() {
  const logo = require("./LookUp.png");
  const dispatch = useDispatch();

  const navlinks = [
    {
      title: "LookUp Home",
      to: "/",
    },
    {
      title: "Produits",
      to: "/products",
    },
    {
      title: "Carousel",
      to: "/carousel",
    },
    {
      title: "Services",
      to: "/services",
    },
    {
      title: "Conferences",
      to: "/conferences",
    },
    {
      title: "Relation Presse",
      to: "/relationpresse",
    },
    {
      title: "Partenaires",
      to: "/partenaires",
    },
  ];

  const notifyError = () => {
    toast.error("Erreur Notification !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  function isAuthenticated() {
    const token = sessionStorage.getItem("token");
    try {
      const { exp } = jwt.decode(token);
      if (exp < (new Date().getTime() + 1) / 1000) {
        return dispatch(logout());
      }
    } catch (err) {
      notifyError();
      return dispatch(logout());
    }
  }

  return (
    <div className={styles.navigation}>
      <Navbar>
        <Nav vertical>
          <img className={styles.logo} src={logo} alt="LookUp" />
          {navlinks.map((item) => (
            <NavItem className={styles.navItem}>
              <Link
                className={styles.pageLinks}
                to={`${item.to}`}
                onClick={isAuthenticated}
              >
                {item.title}
              </Link>
            </NavItem>
          ))}
        </Nav>
        <NavbarText bottom>
          <Button
            style={{ marginTop: "50vh", marginLeft: "1.5rem" }}
            color="danger"
            onClick={() => dispatch(logout())}
          >
            Déconnecter
          </Button>
        </NavbarText>
      </Navbar>
    </div>
  );
}
export default NavBar;
