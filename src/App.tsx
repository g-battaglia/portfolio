import { useState } from "react";

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
