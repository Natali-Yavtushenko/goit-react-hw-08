import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/slice";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectFilter = (state) => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
