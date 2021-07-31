import styled from "styled-components";
import { useState } from "react";

const Nav = styled.nav`
  padding: 0 2rem;
  position: fixed;
  width: 100vw;
  box-shadow: 0 0.5px 4px 0 #e4e4e4;

  .title {
    color: #00d1b2;
    font-family: "Kaushan Script";
  }
  .navbar-brand {
    display: flex;
    align-items: center;
  }
  .navbar-menu {
    align-items: center;
    justify-content: center;
    box-shadow: none;
  }

  .button {
    position: absolute;
    right: 2rem;
  }
  @media screen and (max-width: 1024px) {
    .button {
      position: static;
      margin-top: 1rem;
    }
    .show {
      text-align: center;
      display: flex;
      font-size: 1.5rem;
      border-bottom: 1px solid #f7f7f7;
      border-top: 1px solid #f7f7f7;
      padding: 2rem;
    }
  }
`;

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
      <Nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#hero">
            <h3 className="title is-3 is-primary">BT-Dev</h3>
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
          id="navbarNav"
          className={showOverlay ? "show navbar-menu" : "navbar-menu"}
        >
          <div className="navbar-start">
            <a
              href="#skills"
              onClick={() => setShowOverlay((prev) => !prev)}
              className="navbar-item"
            >
              Skills
            </a>

            <a
              href="#certificates"
              onClick={() => setShowOverlay((prev) => !prev)}
              className="navbar-item"
            >
              Certificazioni
            </a>
            <a
              href="#recent"
              onClick={() => setShowOverlay((prev) => !prev)}
              className="navbar-item"
            >
              Lavori Recenti
            </a>
            <a
              className="button is-primary"
              href="mailto:battaglia.giacomo@icloud.com"
            >
              <strong>Contattami</strong>
            </a>
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
