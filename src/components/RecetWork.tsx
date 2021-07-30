import styled from "styled-components";
import { Card, Grid } from ".";

const Section = styled.section`
  padding-top: 4rem;
  margin-bottom: 4rem;

  .title,
  .subtitle {
    color: #ffff;
  }
  &::before {
    content: "";
    background-color: #00d1b2;
    height: 300px;
    width: 100%;
    position: absolute;
    left: 0;
    margin-top: -2rem;
    border-radius: 16px;

    @media screen and (max-width: 1024px) {
      border-radius: 0;
      height: 10%;
    }
  }
  .section-title {
    position: relative;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1024px) {
  }
`;

const RecetWork = () => {
  return (
    <Section id="recent">
      <div className="section-title">
        <h2 className="title is-2 has-text-centered">Lavori Recenti</h2>
        <h5 className="subtitle is-5 has-text-centered">
          Ecco alcuni progetti su cui ho lavorato recentemente
        </h5>
      </div>
      <Grid>
        <Card sizeClass="is-5by3" url={process.env.PUBLIC_URL + "/ad.jpg"} />
        <Card
          sizeClass="is-5by3"
          url={process.env.PUBLIC_URL + "/wisepress.jpg"}
        />
        <Card
          sizeClass="is-5by3"
          url={process.env.PUBLIC_URL + "/kerykeion.jpg"}
        />
      </Grid>
    </Section>
  );
};

export default RecetWork;
