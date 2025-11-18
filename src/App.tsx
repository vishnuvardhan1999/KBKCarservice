import "./App.css";

import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { WhyChooseUs } from "./components/why-choose-us";
import TempleRoutes from "./components/temple-routes";
import { ImageGallery } from "./components/ImageGallery";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="app-bg min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 app-main">
        <Hero />
        <Services />
        <WhyChooseUs />
        <section className="routes-gallery-grid">
          <TempleRoutes />
          <ImageGallery />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
