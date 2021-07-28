import { Navbar, Hero, RecetWork, Footer, Biography } from "./components";
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
        <RecetWork />
        <Biography />
      </main>
      <Footer />
    </>
  );
}

export default App;
