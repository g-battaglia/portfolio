import styled from "styled-components";
import { useState } from "react";

const Nav = styled.nav`
  .navbar-brand {
    display: flex;
    align-items: center;
  }
  .navbar-menu {
    align-items: center;
    justify-content: center;
    box-shadow: none;
  }
  .show {
    text-align: center;
    display: flex;
    font-size: 1.5rem;
    border-bottom: 1px solid #f7f7f7;
    border-top: 1px solid #f7f7f7;
    padding: 2rem;
  }
  .button {
    position: absolute;
    right: 1rem;
  }
  @media screen and (max-width: 1024px) {
    .button {
      position: static;
      margin-top: 2rem;
    }
  }
`;

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
      <Nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bt-dev.xyz">
            <h4 className="title is-4">BT-Dev</h4>
          </a>

          <button
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setShowOverlay((prev) => !prev)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div
          id="navbarBasicExample"
          className={showOverlay ? "show navbar-menu" : "navbar-menu"}
        >
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>
            <button className="button is-primary">
              <strong>Cotact Me</strong>
            </button>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons"></div>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
