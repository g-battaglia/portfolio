import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Div = styled.div`
  display: flex;

  .icon {
    font-size: 1.55rem;
    color: white;
    padding: 0.2rem;
  }
`;

const SocialFooter = () => {
  return (
    <Div className="social">
      <a
        href="https://www.instagram.com/bt.coding/"
        className="button is-primary"
      >
        <FontAwesomeIcon className="icon" icon={["fab", "instagram"]} />
      </a>
      <a href="https://www.linkedin.com/feed/" className="button is-primary">
        <FontAwesomeIcon className="icon" icon={["fab", "linkedin"]} />
      </a>
      <a href="https://github.com/g-battaglia" className="button is-primary">
        <FontAwesomeIcon className="icon" icon={["fab", "github"]} />
      </a>
    </Div>
  );
};

export default SocialFooter;
