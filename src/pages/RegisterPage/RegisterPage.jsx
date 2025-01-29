import { Field, Form, Formik } from "formik";
import s from "../LoginPage/LoginPage.module.css";

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
          <h3>Register</h3>
          <label className={s.label}>
            <span>Name:</span>
            <Field className={s.field} name="name" />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button className={s.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
