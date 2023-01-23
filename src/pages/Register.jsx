import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Satelit Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display Name" />
          <input type="emial" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
