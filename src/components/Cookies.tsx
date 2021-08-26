import CookieConsent from "react-cookie-consent";

const Cookies = () => {
  return (
    <CookieConsent
      buttonText="Va bene, grazie!"
      style={{
        background: "#fff",
        borderTop: "1px solid #e4e4e4",
        color: "#000",
      }}
      buttonStyle={{
        color: "#fff",
        fontSize: "15px",
        backgroundColor: "#00d1b2",
        padding: ".5rem 1rem",
        borderRadius: "4px",
      }}
    >
      Questo sito utilizza cookie tecnici.
    </CookieConsent>
  );
};

export default Cookies;
