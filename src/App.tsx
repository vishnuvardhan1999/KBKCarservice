import "./App.css";

import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { ImageGallery } from "./components/ImageGallery";
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
      <ImageGallery />
       <TempleRoutes />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
