import styled from "styled-components";
const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  .heroSvg {
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 0;
  }
`;

const Hero = () => {
  return (
    <Section>
      <img
        className="heroSvg"
        src={process.env.PUBLIC_URL + "/hero.svg"}
        alt=""
      />
    </Section>
  );
};

export default Hero;
