"use client"; // 👈 use it here

import { AiOutlineHome } from "react-icons/ai";
import Hello from "./Hello";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleText from "./CircleText";
gsap.registerPlugin(ScrollTrigger);

function Introduce() {
  return (
    <>
      <Hello />
      <div className="introduce" style={{ height: "100vh" }}>
        <div className="breadrum">
          <AiOutlineHome />
          introduce
        </div>
        <h1 className="intro">
          Say Hi from <span>Kien</span>, Webflow Designer and Developer
        </h1>
        <h2 className="des">
          I design and code beautifully simple things and i love what i do. Just
          simple like that!
        </h2>

        <div className="my_project">
          <div className="item">
            <CircleText />
          </div>
        </div>
        <div className="fact_project">
          <div className="date">
            <span>10+</span>
            <span>YEARS OF EXPERIENCE</span>
          </div>
          <div className="count">
            <span>182+</span>
            <span>PROJECTS COMPLETED ON 15 COUNTRIES</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduce;
