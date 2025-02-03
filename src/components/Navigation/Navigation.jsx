import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../redux/auth/operations";
import { AuthNav } from "../AuthNav/AuthNav";
import s from "./Navigation.module.css";

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <nav className={s.nav}>
      {location.pathname === "/" ? (
        <AuthNav />
      ) : (
        <>
          <NavLink to="/" className={s.link}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={s.link}>
            Contacts
          </NavLink>
          {isLoggedIn ? (
            <button className={s.button}>Logout</button>
          ) : (
            <AuthNav />
          )}
        </>
      )}
    </nav>
  );
};

export default Navigation;
