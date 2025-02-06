import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

import s from "./UserMenu.module.css";
import { logOutThunk } from "../../redux/auth/operations";
import { useLocation } from "react-router-dom"; // Імпортуємо useLocation

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className={s.wrapper}>
      {isHomePage && <p className={s.username}>Welcome, {user.name}</p>}
      <button type="button" onClick={() => dispatch(logOutThunk())}>
        logout
      </button>
    </div>
  );
};
