import styled from "styled-components";
import { Grid, Card } from ".";

const BioSection = styled.section`
  margin-top: 6rem;
  padding-top: 4rem;
  position: relative;
  border-radius: 16px;
  padding: 2rem;
  margin-left: -2rem;
  margin-right: -2rem;
  padding-bottom: 4rem;
  @media screen and (max-width: 1024px) {
    box-shadow: none;
  } ;
`;

const Certicates = () => {
  return (
    <BioSection className="box" id="bio">
      <div className="bioTitle">
        <h2 className="title is-2 has-text-centered">Biografia</h2>
        <h5 className="subtitle is-5 has-text-centered">
          Queste sono le certificazione che ho conseguito e le mie competenze
        </h5>
      </div>

      <Grid>
        <Card
          sizeClass="is-4by3"
          url={process.env.PUBLIC_URL + "img/WA4E.jpeg"}
        />
        <Card
          sizeClass="is-4by3"
          url={process.env.PUBLIC_URL + "/img/DJ4E.jpeg"}
        />
        <Card
          sizeClass="is-4by3"
          url={process.env.PUBLIC_URL + "/img/fccJs.jpeg"}
        />
        <Card
          sizeClass="is-4by3"
          url={process.env.PUBLIC_URL + "/img/WD4E.jpeg"}
        />
      </Grid>
    </BioSection>
  );
};

export default Certicates;
