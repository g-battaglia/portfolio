import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  transition: filter 0.2s ease-in-out;
  .image {
    transition: filter 0.2s ease-in-out;
  }
  .card-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .description {
    max-width: 10rem;
    position: absolute;
    opacity: 0;
    z-index: 1;
    text-align: center;
    transition: opacity 0.2s ease-in-out;
  }

  .zoom {
    transition: transform 0.2s ease-in-out; /* Animation */
  }

  .zoom:hover {
    .description {
      opacity: 1;
    }
    .image {
      filter: brightness(15%);
    }
    transform: scale(
      1.1
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
`;

type Props = {
  url: string;
  description?: string;
  link?: string;
};
const Card: React.FC<Props> = ({ url, description, link }) => {
  return (
    <Wrapper className="card zoom">
      <div className="zoom card-image">
        <div className="description">
          <h6 className="subtitle is-spaced is-size-7 has-text-centered has-text-white">
            {description}
          </h6>
          <a href={link} className="button is-primary is-small is-light">
            Visita il sito
          </a>
        </div>
        <div className="image">
          <img src={url} alt="BK" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
