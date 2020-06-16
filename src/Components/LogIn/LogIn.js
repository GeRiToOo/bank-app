import React from "react";
import "./LogIn.scss";

const LogIn = () => {
  return (
    <div className="LogIn">
      <div className="container">
        <div className="header">
          <p>Login</p>
        </div>
        <div className="formContainer">
          <form action="">
            <div className="details">
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Password</label>
              <input type="password" />
            </div>
            <button type="submit">Login</button>
          </form>
          <p>Sign up</p>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
