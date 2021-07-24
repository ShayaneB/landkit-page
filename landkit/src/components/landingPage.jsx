import React from "react";
import Header from "./header";
import "./../App.css";
import welcome from "../img/welcome.jpg";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="landing-page">
          <img src={welcome} alt="Welcome Onboard" style={{ width: "100%" }} />
          <h3 style={{ margin: "10rem" }}>
            Hi there! Welcome to the Landkit Family! I am glad that you are
            reading this. I will be happy to help you grow your business. As a
            thank you for joining us, I would like to give you a gift. Get{" "}
            <a href="javascript:void(0)">Lankit Gift</a> now! You will find
            there [useful thing #1], [useful thing #2], and my personal
            favorite—[useful thing #3].
          </h3>
        </div>
      </>
    );
  }
}

export default LandingPage;
