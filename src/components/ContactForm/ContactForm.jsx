import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./Form.module.css";
import React, { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";

const ContactForm = () => {
  const NameFieldId = useId();
  const NumberFieldId = useId();
  const dispatch = useDispatch();
  const initialValues = { name: "", number: "" };

  function onSubmit(values, { resetForm }) {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    resetForm();
  }

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(20, "Максимум 20 символів")
      .matches(
        /^[A-Za-zА-Яа-яЄєІіЇїҐґ]+$/,
        "Це поле може містити тільки літери"
      )
      .required("Це поле обов'язкове!"),
    number: Yup.string()
      .min(7, "Мінімум 7 символів")
      .max(13, "Максимуму 13 символів")
      .required("Це поле обов'язкове!"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={registerSchema}
      >
        <Form className={s.form}>
          <label className={s.label} htmlFor={NameFieldId}>
            Name
          </label>
          <Field
            className={s.field}
            id={NameFieldId}
            name="name"
            placeholder="Anna"
          />
          <ErrorMessage name="name" component="div" className={s.error} />

          <label className={s.label} htmlFor={NumberFieldId}>
            Number
          </label>
          <Field
            className={s.field}
            id={NumberFieldId}
            name="number"
            placeholder="7203578"
            type="tel"
            inputMode="numeric"
            pattern="\d*"
          />
          <ErrorMessage name="number" component="div" className={s.error} />

          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
