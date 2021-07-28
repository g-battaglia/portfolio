import styled from "styled-components";
const Styles = styled.footer`
  margin-top: 4rem;
  background-color: #00d1b2;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    font-family: "Kaushan Script";
    color: white;
    font-size: 3rem;
  }
`;
const Footer = () => {
  return (
    <Styles>
      <h2 className="logo">BT-Dev</h2>
    </Styles>
  );
};

export default Footer;
