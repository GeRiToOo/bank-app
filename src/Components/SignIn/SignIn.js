import React from "react";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="SignIn">
      <div className="container">
        <div className="header">
          <div className="arrowWrapper">
            <img src={require(`../images/arrow.png`)} alt="logo" />
          </div>
          <p>Sign up</p>
        </div>
        <div className="formContainer">
          <form action="">
            <div className="details">
              <label htmlFor="">First name</label>
              <input type="email" />
              <label htmlFor="">Last name</label>
              <input type="email" />
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Password</label>
              <input type="password" />
              <label htmlFor="">Confirm Password</label>
              <input type="password" />
            </div>
            <div className="avatarContainer">
              <div className="uploadWrapper">
                <p className="upload">Upload Avatar</p>
                <input type="file" id="file" />
                <label htmlFor="file">upload</label>
              </div>
              <div className="imageContainer">
                <div className="imageWrapper">
                  <img src={require(`../images/man.png`)} alt="logo" />
                </div>
              </div>
            </div>
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
