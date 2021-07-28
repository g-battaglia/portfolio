import styled from "styled-components";
const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .heroTitle {
    margin-top: 8rem;
    margin-bottom: 4rem;
    max-width: 50rem;
    .title {
      margin-bottom: 2rem;
    }
  }

  .avatar {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    align-self: center;
    margin-bottom: 6rem;
    padding: 0;
  }
  .heroSvg {
    margin: 0;
    padding: 0;
    position: relative;
    bottom: 0;
  }
`;

const Hero = () => {
  return (
    <Section id="hero">
      <div className="heroTitle">
        <h2 className="title is-2 has-text-centered">Giacomo Battaglia</h2>
        <h5 className="subtitle is-5 has-text-centered">
          Highly motivated, self-taught developer seeking to launch a career
          building web applications and services.
        </h5>
      </div>

      <img
        className="avatar box"
        src={process.env.PUBLIC_URL + "/avatar.jpeg"}
        alt=""
      />
      <img
        className="heroSvg my-6"
        src={process.env.PUBLIC_URL + "/hero.svg"}
        alt=""
      />
    </Section>
  );
};

export default Hero;
