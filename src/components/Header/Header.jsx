import Navigation from "../Navigation/Navigation";
import s from "./header.module.css";
const Header = () => {
  return (
    <header>
      <h1 className={s.title}>Contacts book</h1>
      <Navigation />
    </header>
  );
};

export default Header;
