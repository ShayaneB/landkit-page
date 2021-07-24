import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="top-bar">
          <img className="logo" src={logo} alt="Logo" />
          <Link to="/">Home</Link> &nbsp;
          <Link to="/landing">Landing</Link> &nbsp;
          <Link to="/pages"> Pages</Link> &nbsp;
          <a href="javascript:void(0)">Documentation</a> &nbsp;
          <button className="button">Buy Now</button>
        </div>
      </header>
    );
  }
}

export default Header;
