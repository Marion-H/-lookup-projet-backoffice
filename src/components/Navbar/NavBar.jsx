import React from "react";
import styles from "./NavBar.module.css";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const logo = require("./LookUp.png");

  const navlinks = [
    {
      title: "Products",
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
    </div>
  );
}
export default NavBar;
