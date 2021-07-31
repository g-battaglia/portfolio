import { SocialFooter } from ".";

import styled from "styled-components";
const Styles = styled.footer`
  margin-top: 4rem;
  padding: 0.25rem 0;
  background-color: #00d1b2;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      padding: 0 2.5rem;
    }
  }

  .footerText {
    color: white;
    font-size: 1.05rem;
  }
  .logo {
    font-family: "Kaushan Script";
    font-size: 1.25rem;
  }
`;

type Props = {
  setPrivacy: Function;
};

const Footer: React.FC<Props> = ({ setPrivacy }) => {
  function clickHandler() {
    setPrivacy(true);
  }
  return (
    <Styles>
      <div className="inner container">
        <a href="#hero">
          <h2 className="logo footerText button is-primary">BT-Dev</h2>
        </a>
        <SocialFooter />
        <h2 className=" footerText button is-primary" onClick={clickHandler}>
          Privacy Policy
        </h2>
      </div>
    </Styles>
  );
};

export default Footer;
