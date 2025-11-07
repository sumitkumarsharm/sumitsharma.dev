import React from "react";
import Galaxy from "./components/Particals";

const App = () => {
  return (
    <div className="bg-black w-full h-screen justify-center items-center relative ">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-bold cursor-pointer">
        Hello this is my portfolio!!
      </h1>
    </div>
  );
};

export default App;
