import React from "react";
import "./index.css";
import teste from "./assets/teste.svg";

const App = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="mb-10 text-5xl">Encurte seu link!</h1>
        <input
          className="bg-black text-white w-4/6 px-8 py-4 rounded-xl border  "
          type="text"
          placeholder="Insira o link que você quer encurtar!"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <img src={teste} alt="" className="w-80" />
      </div>
    </div>
  );
};

export default App;
