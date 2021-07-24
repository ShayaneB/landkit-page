import React from "react";
import cardImg from "../img/photo-2.jpg";
import "./../App.css";
import Header from "./header";

class MainPage extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <div className="main-container">
          <div className="content-box">
            <div className="inner-content">
              <div className="main-content content-1">
                <h1>
                  Welcome to &nbsp;<span className="blue-text">Landkit.</span>
                  <br />
                  Develop anything.
                </h1>
                <p className="text-muted">
                  Build a beautiful, modern website with flexible
                  <br />
                  Bootstrap components built from scratch.
                </p>
                <div>
                  <button className="button-2">
                    View all Pages
                    <span style={{ marginLeft: "1rem" }}>
                      <i className="fa fa-chevron-right"></i>
                    </span>
                  </button>
                  <button className="documentation-button">
                    Documentation
                  </button>
                </div>
              </div>
              <div className="main-content content-1">
                <div className="image"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="three-columns">
            <div className="content-box">
              <div className="inner-content">
                <div className="main-content content-2">
                  <i
                    className="fa fa-sliders-h fa-2x"
                    style={{ color: "#335eea" }}
                  ></i>
                  <h3>Build for developers</h3>
                  <p className="text-muted">
                    Landkit is built to make your life easier. Variables, build
                    tooling, documentation, and reusable components.
                  </p>
                </div>
                <div
                  className="main-content content-2"
                  style={{ marginLeft: "6rem" }}
                >
                  <i
                    className="fa fa-pencil-alt fa-2x"
                    style={{ color: "#335eea" }}
                  ></i>
                  <h3>Designed to be modern</h3>
                  <p className="text-muted">
                    Designed with the latest design trends in mind. Landkit
                    feels modern,minimal and beautiful.
                  </p>
                </div>
                <div
                  className="main-content content-2"
                  style={{ marginLeft: "6rem" }}
                >
                  <i
                    className="fa fa-code fa-2x"
                    style={{ color: "#335eea" }}
                  ></i>
                  <h3>Documentation for everything</h3>
                  <p className="text-muted">
                    We've written extensive documentation for components and
                    tools, so you never have to reverse engineer everything.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-container">
          <div className="content-box">
            <div className="inner-content">
              <div className="main-content content-3">
                <i class="fab fa-airbnb fa-2x" style={{ color: "#6c757d" }}>
                  {" "}
                  airbnb
                </i>
              </div>
              <div className="main-content content-3">
                <i
                  className="fab fa-instagram fa-2x"
                  style={{ color: "#6c757d" }}
                >
                  {" "}
                  Instagram
                </i>
              </div>
              <div className="main-content content-3">
                <i
                  className="fab fa-pinterest-p fa-2x"
                  style={{ color: "#6c757d" }}
                >
                  {" "}
                  Pinterest
                </i>
              </div>
              <div className="main-content content-3">
                <i className="fas fa-coins fa-2x" style={{ color: "#6c757d" }}>
                  {" "}
                  Coinbase
                </i>
              </div>
              <div className="main-content content-3">
                {" "}
                <i class="fab fa-dribbble fa-2x" style={{ color: "#6c757d" }}>
                  {" "}
                  Dribble
                </i>
              </div>
            </div>
          </div>
        </div>

        <div className="main-container">
          <div className="content-box">
            <div className="inner-content">
              <div className="main-content content-4">
                <div className="card" style={{ width: "400px" }}>
                  <img className="card-img" src={cardImg} alt="Card Image" />
                  <div className="card-body">
                    <form>
                      <input type="text" placeholder="Name"></input>
                      <hr />
                      <input type="email" placeholder="Email"></input>
                      <hr />
                      <input type="password" placeholder="Password"></input>
                      <hr />
                    </form>
                    <button className="sample" type="submit">
                      Download a Sample
                    </button>
                  </div>
                </div>
              </div>
              <div className="main-content content-4">
                <div className="right-content">
                  <h2>The most useful resource.</h2>
                  <h2 style={{ color: "rgb(79, 228, 158)" }}>
                    ever created for dev|
                  </h2>
                  <p className="text-muted" style={{ fontWeight: "500" }}>
                    Using Landkit to build your site means never worrying about
                    designing another page or cross browser compatibility. Our
                    ever-growing library of components and pre-designed layouts
                    will make your life easier.
                  </p>
                  <div className="two-columns">
                    <div className="first-column">
                      <p style={{ color: "rgb(79, 228, 158)" }}>
                        <i class="fas fa-check-circle"></i>
                        &nbsp;Lifetime updates
                      </p>
                      <p style={{ color: "rgb(79, 228, 158)" }}>
                        <i class="fas fa-check-circle"></i>
                        &nbsp;Tons of assets
                      </p>
                    </div>
                    <div className="first-column">
                      <p style={{ color: "rgb(79, 228, 158)" }}>
                        <i class="fas fa-check-circle"></i>
                        &nbsp;Tech support
                      </p>
                      <p style={{ color: "rgb(79, 228, 158)" }}>
                        <i class="fas fa-check-circle"></i>
                        &nbsp;Integrtion ready
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
