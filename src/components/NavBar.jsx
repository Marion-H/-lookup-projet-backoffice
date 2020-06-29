import React from "react";
import styles from "./NavBar.module.css";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

function NavBar() {
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
  ];
  return (
    <div className={styles.navigation}>
      <Nav vertical>
        {navlinks.map((item) => (
          <NavItem className={styles.navItem}>
            <Link to={`${item.to}`}>{item.title}</Link>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
}
export default NavBar;
