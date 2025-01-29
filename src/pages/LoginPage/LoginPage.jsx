import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  const initiaValues = {
    email: "",
    password: "",
    name: "",
  };
  const handleSabmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div className={s.container}>
      <Formik initialValues={initiaValues} onSubmit={handleSabmit}>
        <Form className={s.form}>
          <h3>Login</h3>
          <label className={s.label}>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button className={s.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
