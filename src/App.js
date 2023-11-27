import CustomScrollBar from "./components/CustomScrollBar/CustomScrollBar";
import logo from "./logo.svg";
import Company from "./pages/Body/Company";
import Intro from "./pages/Body/Intro";
import Projects from "./pages/Body/Projects";
import Skills from "./pages/Body/Skills";
import ThankYou from "./pages/Body/ThankYou";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";

import "./styles.css";
function App() {
  return (
    <div className="App">
      {/* <CustomScrollBar> */}
      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Company />
      <ThankYou />
      <Footer />
      {/* </CustomScrollBar> */}
    </div>
  );
}

export default App;
