import { useState } from "react";
import "./i18n";

// Font awesome:
import {
  faBars,
  faDesktop,
  faPencilRuler,
  faServer,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// My:
import {
  Navbar,
  Hero,
  RecetWork,
  Skils,
  Footer,
  Certicates,
  Cookies,
  Privacy,
} from "./components";
import "bulma/css/bulma.min.css";
import "./App.css";

library.add(
  faBars,
  faInstagram,
  faGithub,
  faLinkedin,
  faDesktop,
  faPencilRuler,
  faServer,
  faTimes
);

function App() {
  const [privacy, setPrivacy] = useState(false);
  return (
    <>
      <Navbar />
      <main
        className="container is-max-widescreen"
        style={{ padding: "0 2rem" }}
      >
        <Hero />
        <Skils />
        <RecetWork />
        <Certicates />
      </main>
      <Footer setPrivacy={setPrivacy} />
      <Cookies />
      <Privacy privacy={privacy} setPrivacy={setPrivacy} />
    </>
  );
}

export default App;
