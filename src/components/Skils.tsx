import styled from "styled-components";

const Section = styled.section`
  padding: 0;
  margin: 0;
  margin-bottom: 4rem;
  padding-top: 4rem;
  .bioTitle {
    position: relative;

    margin: 6rem 0;
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
  i {
    font-size: 3rem;
    padding: 2rem;
  }

  .title-description {
    height: 6rem;
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
        <h2 className="title is-2 has-text-centered">Skills</h2>
        <h5 className="subtitle is-5 has-text-centered">
          Since beginning my journey as a freelance designer nearly 10 years
          ago, I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
        </h5>
      </div>
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <div className="column first">
                <i className="fas fa-desktop has-text-primary"></i>
                <h1 className="title is-size-4 is-spaced">Front-end</h1>
                <p className="title-description">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Languages I speak:
                </p>
                <p>HTML, Pug, Slim, CSS, Sass, Less</p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Dev Tools:
                </p>
                <ul>
                  <li>Atom</li>
                  <li>Bitbucket</li>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>Codekit</li>
                  <li>Codepen</li>
                  <li>Github</li>
                  <li>Gitlab</li>
                  <li>Terminal</li>
                </ul>
              </div>
              <div className="column">
                <i className="fas fa-server has-text-primary"></i>
                <h1 className="title is-size-4 is-spaced">Back-end</h1>
                <p className="title-description">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Languages I speak:
                </p>
                <p>HTML, Pug, Slim, CSS, Sass, Less</p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Dev Tools:
                </p>
                <ul>
                  <li>Atom</li>
                  <li>Bitbucket</li>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>Codekit</li>
                  <li>Codepen</li>
                  <li>Github</li>
                  <li>Gitlab</li>
                  <li>Terminal</li>
                </ul>
              </div>
              <div className="column">
                <i className="fas fa-pencil-ruler has-text-primary"></i>
                <h1 className="title is-size-4 is-spaced">Designer</h1>
                <p className="title-description">
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Things I enjoy designing:
                </p>
                <p>UX, UI, Web, Mobile, Apps, Logos</p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Design Tools:
                </p>
                <ul>
                  <li>Balsamiq Mockups</li>
                  <li>Figma</li>
                  <li>Invision</li>
                  <li>Marvel</li>
                  <li>Pen &amp; Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                  <li>Zeplin</li>
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
