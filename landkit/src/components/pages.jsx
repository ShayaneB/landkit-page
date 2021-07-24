import React from "react";
import Header from "./header";
import "./../App.css";
import pages from "../img/pages.png";

class Pages extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="landing-page">
          <img src={pages} alt="Our Pages" style={{ width: "100%" }} />
          <h3 style={{ margin: "1rem" }}>
            Please Enter Your Requirements Below
          </h3>
          <form>
            <input type="text" placeholder="Name"></input>
            <hr />
            <input type="text" placeholder="Company Name"></input>
            <hr />
            <input type="text" placeholder="Email Id"></input>
            <hr />
            <input type="number" placeholder="Mobile Number"></input>
            <hr />
          </form>

          <button className="sample" type="submit">
            {" "}
            Submit Query
          </button>
        </div>
      </>
    );
  }
}

export default Pages;
