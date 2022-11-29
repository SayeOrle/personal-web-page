import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  const [animation, setAnimation] = useState(false);
  const [tabs, setTabs] = useState(0);

  return (
    <div onLoad={()=>setAnimation(true)} className="h-screen bg-[#131313] grid place-items-center text-white">
      <div className="flex flex-col items-center text-center gap-y-6">
        <div className={`flex flex-col items-center trnasition-all duration-[2s] relative -top-40 ${animation ? " opacity-100 visible -translate-y-0 slide-bottom "  :" opacity-0 invisible   "} `}>
          <div className="relative h-32 w-32 rounded-full overflow-hidden ">
            <Image src={"/prefil.gif"} fill />
          </div>
          <h2>Saye Orle</h2>
          <h3 className="text-color">Front-End Developer</h3>
        </div>
        <div className="flex">
          <div className="relative -top-[160px] slide-bottom">
            <h3>7</h3>
            <p>
              Years Of <br /> Work
            </p>
          </div>
          <div className="relative -top-[160px] slide-bottom-200ms">
            <h3>7</h3>
            <p>
              Completed
              <br /> Projects
            </p>
          </div>
          <div className="relative -top-[160px] slide-bottom-300ms">
            <h3>7</h3>
            <p>
              Cup Of
              <br /> Tea
            </p>
          </div>
        </div>
        <div className="flex">
          <button className="flex-1">GitHub</button>
          <button className="">Discord</button>
          <button className="">Linkedin</button>
        </div>
        <div className="flex gap-x-2">
          <button onClick={() => setTabs(0)}>AboutMe</button>
          <button onClick={() => setTabs(1)}>Skills</button>
          <button onClick={() => setTabs(2)}>Projects</button>
        </div>
        <div>
          {tabs === 0 && <AboutMe />}
          {tabs === 1 && <Skills />}
          {tabs === 2 && <Projects />}
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
