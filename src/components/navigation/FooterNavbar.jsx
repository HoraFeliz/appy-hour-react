import React from "react";
import FooterNavbarItem from "./FooterNavbarItem";
import { NavLink } from "react-router-dom";

export default function FooterNavbar() {
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