import SwitchButton from "./components/SwitchButton";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ThemeContextProvider from "./context/ThemeContextProvider";

import "./App.css";

function App() {
  return (
    <ThemeContextProvider>
      <SwitchButton />
      <Intro />
      <Projects />
      <Services />
      <Contact />
    </ThemeContextProvider>
  );
}

export default App;
