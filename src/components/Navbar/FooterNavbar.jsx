import React, { Component } from "react";
import FooterNavbarItem from "./FooterNavbarItem";
import { NavLink } from "react-router-dom";

class FooterNavbar extends Component {
  render() {
    return (
      <div className="appy--footer-navbar">
        <NavLink to={`/tours`}>
          <FooterNavbarItem type="tours" />
        </NavLink>
        <NavLink to={`/record`}>
          <FooterNavbarItem type="record" />
        </NavLink>
        <NavLink to={`/create`}>
          <FooterNavbarItem type="create" />
        </NavLink>
      </div>
    );
  }
}

export default FooterNavbar;
