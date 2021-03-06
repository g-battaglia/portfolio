import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .heroTitle {
    margin-top: 8rem;
    margin-bottom: 4rem;
    max-width: 40rem;
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
  const { t } = useTranslation();

  return (
    <Section id="hero">
      <div className="heroTitle">
        <h2 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-centered">
          Giacomo Battaglia
        </h2>
        <h5 className="subtitle is-5 has-text-centered">{t("Hero text")}</h5>
      </div>

      <img
        className="avatar box"
        src={process.env.PUBLIC_URL + "/img/avatar.jpeg"}
        alt=""
      />
      <img
        className="heroSvg my-6"
        src={process.env.PUBLIC_URL + "/img/hero.svg"}
        alt=""
      />
    </Section>
  );
};

export default Hero;
