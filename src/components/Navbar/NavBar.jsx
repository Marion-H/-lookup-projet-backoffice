import React from "react";
import styles from "./NavBar.module.css";
import { Navbar, Nav, NavItem, NavbarText, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actionCreators";

function NavBar() {
  const logo = require("./LookUp.png");
  const dispatch = useDispatch();

  const navlinks = [
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
    {
      title: "Repertoire",
      to: "/repo",
    },
  ];

  return (
    <div className={styles.navigation}>
      <Navbar>
        <Nav vertical>
          <img className={styles.logo} src={logo} alt="LookUp" />
          {navlinks.map((item) => (
            <NavItem className={styles.navItem}>
              <Link className={styles.pageLinks} to={`${item.to}`}>
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
