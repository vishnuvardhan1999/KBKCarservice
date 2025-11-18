import "./App.css";

import { Header } from "./components/header";
import { Hero } from "./components/hero";
import TempleRoutes from "./components/temple-routes";
import { Contact } from "./components/contact";
import { Services } from "./components/services";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
       <TempleRoutes />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
