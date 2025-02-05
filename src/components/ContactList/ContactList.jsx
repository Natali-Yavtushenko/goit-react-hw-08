import { useSelector } from "react-redux";
import { selectContactsFilters } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import s from "./List.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContactsFilters);

  console.log("Contacts in ContactList:", contacts);

  if (!contacts || !Array.isArray(contacts)) {
    return <p>No contacts found.</p>;
  }

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
