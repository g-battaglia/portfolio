import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = styled.section`
  padding: 0;
  margin: 0;
  margin-bottom: 4rem;
  padding-top: 4rem;
  .bioTitle {
    position: relative;

    margin: 4rem 0;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title,
    .subtitle {
      color: #fff;
      max-width: 40rem;
      text-align: justify;
    }
  }
  .box {
    padding-bottom: 3rem;
  }
  i,
  .column-icon {
    font-size: 3rem;
    margin: 2rem;
  }

  .title-description {
    height: 8rem;
    @media screen and (max-width: 1024px) {
      height: 9rem;
    }
  }
  .columns {
    font-size: 1.1rem;
    .column {
      border-left: 1px solid #eeeeee;
      ul {
        margin-left: -0.15rem;
      }

      @media screen and (max-width: 768px) {
        border-left: none;
        border-top: 1px solid #eeeeee;
      }
    }
    .first {
      border: none;
    }
  }
  li {
    list-style: none;
  }

  &::before {
    content: "";
    background-color: #00d1b2;
    height: 800px;
    width: 100%;
    position: absolute;
    left: 0;
    margin-top: -2rem;
    border-radius: 16px;
    @media screen and (max-width: 1024px) {
      border-radius: 0;
      height: 25%;
    }
  }
`;

const Skils = () => {
  return (
    <Section className="section skills has-text-centered" id="skills">
      <div className="bioTitle">
        <h2 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-centered">
          Skills
        </h2>
        <h5 className="subtitle is-5 has-text-centered">
          L'elenco in breve delle mie competenze
        </h5>
      </div>
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <div className="column first">
                <FontAwesomeIcon
                  className="column-icon has-text-primary"
                  icon="desktop"
                />
                <h1 className="title is-size-4 is-spaced">Front-end</h1>
                <p className="title-description">
                  Il frontend ?? la mia specialit??. La tecnologia che padroneggio
                  meglio ?? <b>React</b> ma scelgo le tecnologie pi?? adatte in
                  base al singolo progetto.
                </p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Linguaggi:
                </p>
                <p>Javascript, Typescript, PHP, SASS, HTML, CSS</p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Frakework e tecnlogie:
                </p>
                <ul>
                  <li>React</li>
                  <li>React Ecosystem</li>
                  <li>Material UI</li>
                  <li>Javascript ES Next</li>
                  <li>Wordpress (temi personalizzati)</li>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>Tailwind</li>
                  <li>Codepen</li>
                </ul>
              </div>
              <div className="column ">
                <FontAwesomeIcon
                  className="column-icon has-text-primary"
                  icon="server"
                />

                <h1 className="title is-size-4 is-spaced">Back-end</h1>
                <p className="title-description">
                  Nel backend do il mio meglio per realizzare strutture solide
                  da collegare al frontend.
                </p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Linguaggi:
                </p>
                <p>Python, PHP, Javascript, SQL, Bash</p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Framework e tecnologie
                </p>
                <ul>
                  <li>Django</li>
                  <li>Django Rest Framework</li>
                  <li>FastAPI</li>
                  <li>Flask</li>
                  <li>Node.js</li>
                  <li>Bash/Zsh scripting</li>
                  <li>Linux</li>
                  <li>Aws</li>
                  <li>Firebase</li>
                </ul>
              </div>
              <div className="column">
                <FontAwesomeIcon
                  className="column-icon has-text-primary"
                  icon="pencil-ruler"
                />
                <h1 className="title is-size-4 is-spaced">Design</h1>
                <p className="title-description">
                  Realizzo anche design semplici e puliti che aiutino l'utente
                  ad interagire con il sito.
                </p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Tipi di design che so realizzare:
                </p>
                <p>UX, UI, Web, Mobile, Apps</p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Strumenti che utilizzo:
                </p>
                <ul>
                  <li>Figma</li>
                  <li>Canva</li>
                  <li>Sketch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skils;
