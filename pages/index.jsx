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
    <div
      onLoad={() => setAnimation(true)}
      className="h-screen bg-[#131313] grid place-items-center text-white"
    >
      <div className="div flex flex-col items-center text-center gap-y-6">
        <div
          className={`flex flex-col items-center  relative duration-[3s] -top-40 ${
            animation
              ? " opacity-100 visible slide-bottom "
              : " opacity-0 invisible   "
          } `}
        >
          <div className="relative h-32 w-32 rounded-full overflow-hidden ">
            <Image src={"/prefil.gif"} fill />
          </div>
          <h2 className="text-2xl font-semibold">Saye Orle</h2>
          <h3 className="text-color text-xs">Front-End Developer</h3>
        </div>
        <div className="flex text-sm gap-x-7">
          <div
            className={`relative -top-[160px] duration-[6s] slide-bottom ${
              animation ? " opacity-100 visible " : " opacity-0 invisible "
            }`}
          >
            <h3>7</h3>
            <p>
              Years Of <br /> Work
            </p>
          </div>
          <div
            className={`relative -top-[160px] duration-[6s] slide-bottom-150ms ${
              animation ? " opacity-100 visible " : " opacity-0 invisible "
            }`}
          >
            <h3>7</h3>
            <p>
              Years Of <br /> Work
            </p>
          </div>
          <div
            className={`relative -top-[160px] duration-[6s] slide-bottom-200ms ${
              animation ? " opacity-100 visible " : " opacity-0 invisible "
            }`}
          >
            <h3>7</h3>
            <p>
              Years Of <br /> Work
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col gap-y-2 relative -top-40 duration-[8s] ${
            animation
              ? " opacity-100 visible slide-bottom-200ms "
              : " opacity-0 invisible   "
          } `}
        >
          <div>
            <button className="hover:scale-105 transition-all flex-1 w-full">
              GitHub
            </button>
          </div>
          <div className="flex gap-x-4">
            <button className="hover:scale-105 transition-all ">Discord</button>
            <button className="hover:scale-105 transition-all ">
              Linkedin
            </button>
          </div>
        </div>
        <div
          className={`flex gap-x-2 bg-[#212121] px-2 rounded-xl py-2  relative -top-40 duration-[10s] ${
            animation
              ? " opacity-100 visible slide-bottom-300ms "
              : " opacity-0 invisible "
          } `}
        >
          <button
            className={`hover:bg-[#121212] transition-all ${
              tabs == 0 ? " bg-[#121212] " : ""
            }`}
            onClick={() => setTabs(0)}
          >
            AboutMe
          </button>
          <button
            className={`hover:bg-[#121212] transition-all ${
              tabs == 1 ? " bg-[#121212] " : ""
            }`}
            onClick={() => setTabs(1)}
          >
            Skills
          </button>
          <button
            className={`hover:bg-[#121212] transition-all ${
              tabs == 2 ? " bg-[#121212] " : ""
            }`}
            onClick={() => setTabs(2)}
          >
            Projects
          </button>
        </div>
        <div
          className={`relative -top-40 duration-[10s] ${
            animation
              ? " opacity-100 visible slide-bottom-400ms "
              : " opacity-0 invisible "
          }`}
        >
          {tabs === 0 && <AboutMe />}
          {tabs === 1 && <Skills />}
          {tabs === 2 && <Projects />}
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
