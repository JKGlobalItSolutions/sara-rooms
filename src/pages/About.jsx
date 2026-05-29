import { About as AboutSection } from "../components/About.jsx";
import { Testimonials } from "../components/Testimonials.jsx";
import { FAQ } from "../components/FAQ.jsx";

export function About() {
  return (
    <>
      <AboutSection />
      <Testimonials />
      <FAQ />
    </>
  );
}

export default About;