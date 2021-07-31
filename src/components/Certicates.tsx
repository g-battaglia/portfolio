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
        <h2 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-centered">
          Certificazioni
        </h2>
        <h5 className="subtitle is-5 has-text-centered">
          Queste sono le certificazione che ho conseguito e le mie competenze
        </h5>
      </div>

      <Grid>
        <Card
          link="https://www.coursera.org/account/accomplishments/certificate/5EGW2BJA6NQ8"
          url={process.env.PUBLIC_URL + "img/WA4E.jpeg"}
          description="Specializzazion divisa in 4 corsi sul web Design, HTML, CSS e Javascript"
        />
        <Card
          url={process.env.PUBLIC_URL + "/img/DJ4E.jpeg"}
          link="https://www.coursera.org/account/accomplishments/specialization/certificate/5V5GSD4YR5J2"
          description="Specializzazion divisa in 4 corsi su Python Django"
        />
        <Card
          url={process.env.PUBLIC_URL + "/img/fccJs.jpeg"}
          link="https://www.freecodecamp.org/certification/g-battaglia/javascript-algorithms-and-data-structures"
          description="Certificazione completa sullo sviluppo in Javascript"
        />
        <Card
          url={process.env.PUBLIC_URL + "/img/WD4E.jpeg"}
          link="https://www.coursera.org/account/accomplishments/specialization/certificate/SKJHW756WZGG"
          description="Specializzazion divisa in 4 corsi sullo sviluppo in PHP ed SQL"
        />
        <Card
          url={process.env.PUBLIC_URL + "/img/jquery.jpeg"}
          description="Corso sull'utilizzo di jQuery"
          link="https://onemonth.com/certificates/FWtXZ4vmV2fYTjZ4KAsr"
        />
      </Grid>
    </BioSection>
  );
};

export default Certicates;
