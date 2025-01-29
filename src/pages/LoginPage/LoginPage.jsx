import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";
import { Link } from "react-router-dom";

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
          <h3 className={s.subtitle}>Login</h3>
          <label className={s.label}>
            <span>Email:</span>
            <Field className={s.field} name="email" />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field className={s.field} name="password" type="password" />
          </label>
          <button className={s.button} type="submit">
            Login
          </button>
          <p>
            You do not account? <Link to="/register">Lets create one!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
