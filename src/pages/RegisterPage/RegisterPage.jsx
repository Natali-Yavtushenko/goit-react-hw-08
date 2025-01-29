import { Field, Form, Formik } from "formik";
import s from "../LoginPage/LoginPage.module.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const initiaValues = {
    email: "",
    password: "",
  };
  const handleSabmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div className={s.container}>
      <Formik initialValues={initiaValues} onSubmit={handleSabmit}>
        <Form className={s.form}>
          <h3 className={s.subtitle}>Register</h3>
          <label className={s.label}>
            <span>Name:</span>
            <Field className={s.field} name="name" />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field className={s.field} name="email" />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field className={s.field} name="password" type="password" />
          </label>
          <button className={s.button} type="submit">
            Register
          </button>
          <p>
            <p>
              You already have account? <Link to="/lodin">Login!</Link>
            </p>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
