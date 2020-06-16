import React from "react";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="Menu">
      <nav>
        <ul className="nav_list">
          <li>wallet</li>
          <li>savings</li>
          <li>loan</li>
          <li>settings</li>
          <li>sign out</li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
