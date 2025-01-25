import s from "./List.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {contacts.map((item) => (
          <Contact {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
