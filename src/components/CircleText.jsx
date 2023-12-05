import "../style/circleText.css";
import { useEffect } from "react";
function CircleText() {
  useEffect(() => {
    const text = document.querySelector(".text p");

    if (text) {
      text.innerHTML = text.innerHTML
        .split("")
        .map(
          (char, i) =>
            `<span style={{transform:rotate(${i * 7.2}deg)}}>${char}</span>`
        )
        .join("");
    }
  }, []); // En
  return (
    <>
      <div className="circle">
        <div className="logo"></div>
        <div className="text">
          <p>Radka Krenova - Fron-End Developer / UX Designer</p>
        </div>
      </div>
    </>
  );
}

export default CircleText;
