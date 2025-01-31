import { Field, Form, Formik } from "formik";
import s from "../LoginPage/LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegisterPage = () => {
  const initiaValues = {
    email: "",
    password: "",
    name: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSabmit = (values, actions) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
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
            You already have account? <Link to="/Login">Login!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
