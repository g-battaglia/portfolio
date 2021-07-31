import styled from "styled-components";

const Div = styled.div`
  display: flex;
  color: white;

  i {
    font-size: 1.55rem;
  }
`;

const SocialFooter = () => {
  return (
    <Div className="social">
      <a href="https://www.instagram.com/bt.coding/">
        <i className="fab fa-instagram button is-primary"></i>
      </a>
      <a href="https://www.linkedin.com/feed/">
        <i className="fab fa-linkedin button is-primary"></i>
      </a>
      <a href="https://github.com/g-battaglia">
        <i className="fab fa-github button is-primary"></i>
      </a>
    </Div>
  );
};

export default SocialFooter;
