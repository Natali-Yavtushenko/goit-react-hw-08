import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    actions.resetForm();
  };
  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <h3 className={s.subtitle}>Login</h3>
          <label className={s.label}>
            <span>Email:</span>
            <Field className={s.field} name="email" type="email" />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field className={s.field} name="password" type="password" />
          </label>
          <button className={s.button} type="submit">
            Login
          </button>
          <p>
            You do not account? <Link to="/register">Registretion</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
