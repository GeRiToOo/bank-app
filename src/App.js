import React from "react";
import "./App.scss";
import Menu from "./Components/common/Menus/Menu/Menu";
import SignInLogInMenu from "./Components/common/Menus/SignInLogInMenu/SignInLogInMenu";
import LogIn from "./Components/LogIn/LogIn";
import SignIn from "./Components/SignIn/SignIn";

const App = () => {
  return (
    <div className="App">
      <div className="navigation">
        <div className="logo_wrapper">
          <img src={require(`./Components/images/logo.png`)} alt="logo" />
        </div>
        <Menu />
        {/* <SignInLogInMenu /> */}
        {/* <LogIn /> */}
        <SignIn />
      </div>
    </div>
  );
};

export default App;
