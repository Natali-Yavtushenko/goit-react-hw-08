import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

import s from "./UserMenu.module.css";
import { logOutThunk } from "../../redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.wrapper}>
      <p className={s.usernme}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOutThunk())}>
        logout
      </button>
    </div>
  );
};
