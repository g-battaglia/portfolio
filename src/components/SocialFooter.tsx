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
      <i className="fab fa-instagram button is-primary"></i>
      <i className="fab fa-facebook-f button is-primary"></i>
      <i className="fab fa-linkedin button is-primary"></i>
      <i className="fab fa-github button is-primary"></i>
    </Div>
  );
};

export default SocialFooter;
