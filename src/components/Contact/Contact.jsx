import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa";

import s from "../ContactList/List.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={s.containerItem}>
      <div className={s.contact}>
        <p className={s.p}>
          <FaUser />
          {name}
        </p>
        <p className={s.p}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
