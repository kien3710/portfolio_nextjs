import About from "@/components/About";
import Contact from "@/components/Contact";
import Introduce from "@/components/Introduce";
import Resume from "@/components/Resume";
import Service from "@/components/Service";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
      <Introduce />
      <About />
      <Resume />
      <Service />
      <Skill />
      <Contact />
    </>
  );
}
