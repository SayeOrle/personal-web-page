import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [animation, setAnimation] = useState(false);

  return (
    <div onLoad={() => setAnimation(true)}
      className={`flex justify-center transition-all duration-[3s]  ${
        animation ? " opacity-100 visible translate-y-24 " : " invisible opacity-0  "
      } `}
    >
      <div className="relative h-24 w-24">
        <Image fill src={"/prefil.gif"} />
      </div>
    </div>
  );
}
