import { useDispatch } from "react-redux";
import { useAuth } from "../../redux/auth/operations";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { logOutThunk } from "../../redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <h1>Contacts book</h1>
    </div>
  );
};

export default Header;
