import React from "react";

export default function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Satelit Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="emial" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
}
