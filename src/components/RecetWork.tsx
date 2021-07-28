import styled from "styled-components";

const Section = styled.section`
  margin-top: 4rem;
  .grid {
    display: grid;
  }
  .card {
    width: 400px;
  }
`;

const RecetWork = () => {
  return (
    <Section className="container">
      <div className="section-title">
        <h2 className="title is-2 has-text-centered">My Recent Work</h2>
        <h5 className="subtitle is-5 has-text-centered">
          Here are a few design projects I've worked on recently. Want to see
          more? Email me.
        </h5>
      </div>
      <div className="grid">
        <div className="card">
          <div className="card-image">
            <div className="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RecetWork;
