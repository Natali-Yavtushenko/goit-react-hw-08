import s from "./List.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors.js";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  console.log("Contacts in ContactList:", contacts);
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
