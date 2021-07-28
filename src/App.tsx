import { Navbar, Hero, RecetWork } from "./components";
import "bulma/css/bulma.min.css";

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
      </main>
    </>
  );
}

export default App;
