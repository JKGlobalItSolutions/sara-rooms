import { ScrollProgress } from "./components/ScrollProgress.jsx";
import { MoonCountdown } from "./components/MoonCountdown.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Rooms } from "./components/Rooms.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Facilities } from "./components/Facilities.jsx";
import { Location } from "./components/Location.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { FAQ } from "./components/FAQ.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { StickyBook } from "./components/StickyBook.jsx";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <MoonCountdown />
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Gallery />
        <Facilities />
        <Location />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyBook />
    </div>
  );
}

export default App;