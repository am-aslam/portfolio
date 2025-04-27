import Encription from "../../Components/Main/Encription";
import Footer from "../../Components/Main/Footer";
import Hero from "../../Components/Main/Hero";
import Project from "../../Components/Main/Project";
import Skills from "../../Components/Main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20" >
        <Hero/>
        <Skills/>
        <Encription/>
        <Project/>
      </div>
    </main>
  );
}
