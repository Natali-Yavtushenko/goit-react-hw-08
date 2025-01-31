import { NavLink } from "react-router-dom";
import isLoggedIn from "../Header/Header";
import s from "./Navigation.module.css";

<nav className={s.nav}>
  <NavLink to="/">Home</NavLink>
  <NavLink to="/contacts">Contacts</NavLink>
  {isLoggedIn ? (
    <button>Logout</button>
  ) : (
    <>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  )}
</nav>;
