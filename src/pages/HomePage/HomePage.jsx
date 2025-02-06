import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Contacts book</h1>
      <h2>Welcome to our Contact Manager!</h2>
      <p>Manage your contacts efficiently and securely.</p>
    </div>
  );
};

export default HomePage;
