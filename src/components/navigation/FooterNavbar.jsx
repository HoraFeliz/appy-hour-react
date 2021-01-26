import React from "react";
import FooterNavbarItem from "./FooterNavbarItem";
import { NavLink } from "react-router-dom";

export default function FooterNavbar() {
  return (
    <div className="appy--footer-navbar">
      <NavLink to={`/tours`}>
        <FooterNavbarItem type="rutas" />
      </NavLink>
      <NavLink to={`/record`}>
        <FooterNavbarItem type="grabar" />
      </NavLink>
      <NavLink to={`/create`}>
        <FooterNavbarItem type="crear" />
      </NavLink>
    </div>
  );
}