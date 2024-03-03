import About from "@/componenet/About";
import Contact from "@/componenet/Contact";
import Featured from "@/componenet/Featured";
import Gallery from "@/componenet/Gallery";
import { Map } from "@/componenet/Map";
import { Navbar } from "@/componenet/Navbar";
import Social from "@/componenet/Social";

export default function Home() {
  return (
    <main className="">
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
