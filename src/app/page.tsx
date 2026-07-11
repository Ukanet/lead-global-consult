import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import StrategicObjectives from "@/components/StrategicObjectives";
import Programs from "@/components/Programs";
import Consulting from "@/components/Consulting";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <CoreValues />
        <StrategicObjectives />
        <Programs />
        <Consulting />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
