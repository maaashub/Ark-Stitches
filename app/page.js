import About from "@/component/pages/About";
import Contact from "@/component/pages/Contact";
import Featured from "@/component/pages/Featured";
import Gallery from "@/component/pages/Gallery";
import { Map } from "@/component/pages/Map";
import { Navbar } from "@/component/pages/Navbar";
import Social from "@/component/pages/Social";

export default function Home() {
  return (
    <main className="bg-gray-300">
      <Navbar/>
      <Gallery/>
      <About/>
      <Featured/>
      <Map/>
      <Contact/>
      <Social/>
    </main>
  );
}
