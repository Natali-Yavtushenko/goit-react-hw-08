import React from "react";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  return (
    <div className={s.wrapper}>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
