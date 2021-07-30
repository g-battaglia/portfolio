import {
  Navbar,
  Hero,
  RecetWork,
  Skils,
  Footer,
  Certicates,
  Cookies,
} from "./components";
import "bulma/css/bulma.min.css";
import "./App.css";

function App() {
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
      <Footer />
      <Cookies />
    </>
  );
}

export default App;
