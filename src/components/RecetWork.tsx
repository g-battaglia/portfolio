import styled from "styled-components";
import { Card, Grid } from ".";

const Section = styled.section`
  padding-top: 4rem;
  .title,
  .subtitle {
    color: #ffff;
  }
  &::before {
    content: "";
    background-color: #00d1b2;
    height: 75vh;
    width: 100%;
    position: absolute;
    margin-top: -2rem;
    margin-left: -2rem;
    border-radius: 16px;
  }
  .section-title {
    position: relative;
    margin-bottom: 4rem;
  }
  @media screen and (max-width: 1024px) {
    background-color: #00d1b2;
    position: relative;
    width: 100vw;
    left: -2rem;
    padding: 4rem 2rem 4rem 2rem;
    &::before {
      display: none;
    }
  }
`;

const RecetWork = () => {
  return (
    <Section id="recent">
      <div className="section-title">
        <h2 className="title is-2 has-text-centered">My Recent Work</h2>
        <h5 className="subtitle is-5 has-text-centered">
          Here are a few design projects I've worked on recently.
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
    </Section>
  );
};

export default RecetWork;
