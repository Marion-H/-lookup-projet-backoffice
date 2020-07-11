import React from "react";
import styles from "./NavBar.module.css";
import { Navbar, Nav, NavItem, NavbarText, Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actionCreators";
// import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";

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

  // const history = useHistory();

  function isAuthenticated() {
    const token = sessionStorage.getItem("token");
    try {
      const { exp } = jwt.decode(token);
      if (exp < (new Date().getTime() + 1) / 1000) {
        sessionStorage.clear();
        return <Redirect to="/login" />;
      }
    } catch (err) {
      return console.log("false");
    }
    return true;
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
