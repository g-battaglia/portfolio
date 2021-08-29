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
    height: 500px;
    width: 100%;
    position: absolute;
    left: 0;
    margin-top: -2rem;
    border-radius: 16px;

    @media screen and (max-width: 1024px) {
      border-radius: 0;
      height: 15%;
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
        <h2 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-centered">
          Lavori Recenti
        </h2>
        <h5 className="subtitle is-5 has-text-centered">
          Ecco alcuni progetti su cui ho lavorato recentemente
        </h5>
      </div>
      <Grid>
        <Card
          description="Frontend realizzato con React+Typescript, backend con django rest framework e restAPI."
          link="https://astrologiadavvero.netlify.app/"
          url={process.env.PUBLIC_URL + "/img/astrologiaDavvero.jpeg"}
        />

        <Card
          description="Landing page example realizzata con React+Typescript."
          link="https://bt-plg-test.netlify.app/"
          url={process.env.PUBLIC_URL + "/img/playground.jpeg"}
        />

        <Card
          description="Tema di newspaper wordpress scritto da zero principalmente con l'utilizzo di SASS e PHP"
          link="http://centuryboy.altervista.org/wordpress/"
          url={process.env.PUBLIC_URL + "/img/wisepress.jpg"}
        />
        <Card
          description="Libreria di calcoli e grafici astrologici open source realizzato con Python per astrologiadavvero.it"
          link="https://github.com/g-battaglia/kerykeion/"
          url={process.env.PUBLIC_URL + "/img/kerykeion.jpg"}
        />
      </Grid>
    </Section>
  );
};

export default RecetWork;
