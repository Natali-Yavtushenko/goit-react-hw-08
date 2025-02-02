import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import s from "./RegisterPage.module.css";

const RegisterPage = () => {
  const initialValues = {
    email: "",
    password: "",
    name: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    actions.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <h3 className={s.subtitle}>Register</h3>
          <label className={s.label}>
            <span>Name:</span>
            <Field className={s.field} name="name" />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field className={s.field} name="email" type="email" />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field className={s.field} name="password" type="password" />
          </label>
          <button className={s.button} type="submit">
            Register
          </button>
          <p className={s.text}>
            You already have an account?{" "}
            <Link className={s.link} to="/login">
              Login!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
