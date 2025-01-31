import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div className={s.container}>
      <h1>Contacts book</h1>
    </div>
  );
};

export default Header;
