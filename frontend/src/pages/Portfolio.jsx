import CustomCursor from "../components/common/CustomCursor";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Work from "../sections/Work";
import Expertise from "../sections/Expertise";
import Thoughts from "../sections/Thoughts";
import Gallery from "../sections/Gallery";
import Footer from "../sections/Footer";

export default function Portfolio() {
  return (
    <div className="bg-[#050505] text-white">
      <CustomCursor />
      <Hero />
      <About />
      <Work />
      <Expertise />
      <Thoughts />
      <Gallery />
      <Footer />
    </div>
  );
}
