import { Discover } from "@/component/Discover";
import { Footer } from "@/component/Footer";
import { ImageModal } from "@/component/ImageModal";
import About from "@/component/pages/About";
import Contact from "@/component/pages/Contact";
import Featured from "@/component/pages/Featured";
import Gallery from "@/component/pages/Gallery";
import { Map } from "@/component/pages/Map";
import { Navbar } from "@/component/pages/Navbar";
import Social from "@/component/pages/Social";

export default function Home() {
  return (
    <main className="bg-gray-50/25 w-full min-h-screen relative">
        <Navbar />
        <Discover />
        <Gallery />
        <About />
        <Featured />
        <Map />
        <Contact />
        <Social />
        <Footer />
      
        {/* <ImageModal /> */}
    
    </main>
  );
}
