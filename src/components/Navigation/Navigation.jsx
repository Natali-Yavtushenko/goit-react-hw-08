import { NavLink } from "react-router-dom";
import { useAuth } from "../../redux/auth/operations";
import AuthNav from "../AuthNav/AuthNav";
import s from "./Navigation.module.css";
import { UserMenu } from "../UserMenu/UserMenu";

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={s.nav}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};

export default Navigation;
