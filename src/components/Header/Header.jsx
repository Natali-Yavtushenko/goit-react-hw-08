import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import s from "./header.module.css";

const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return null;
      case "/contacts":
        return "Contacts book";
      default:
        return "Welcome to our Contact Manager!";
    }
  };

  return (
    <header className={s.header}>
      {location.pathname === "/" ? null : (
        <h1 className={s.title}>{getTitle()}</h1>
      )}
      <Navigation />
    </header>
  );
};

export default Header;
