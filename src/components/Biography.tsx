import styled from "styled-components";
import { Grid, Card } from ".";

const BioSection = styled.section`
  margin-top: 4rem;
  padding-top: 4rem;
`;

const Biography = () => {
  return (
    <BioSection id="bio">
      <div className="bioTitle">
        <h2 className="title is-2 has-text-centered">Giacomo Battaglia</h2>
        <h5 className="subtitle is-5 has-text-centered">
          Highly motivated, self-taught developer seeking to launch a career
          building web applications and services.
        </h5>
      </div>
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </BioSection>
  );
};

export default Biography;
