import React, { useState } from "react";
import "./index.css";
import teste from "./assets/teste.svg";
import { CgCopy } from "react-icons/cg";
import { AiFillRightSquare } from "react-icons/ai";

const App = () => {
  const [link, setLink] = useState("");
  const [linkCurto, setLinkCurto] = useState("");
  const API = "https://api.shrtco.de/v2/shorten?url=";

  const changeHandler = (e) => {
    setLink(e.target.value);
  };

  const encurtaLink = async () => {
    const response = await fetch(`${API}${link}`);
    const data = await response.json();
    setLinkCurto(data.result.short_link);
  };

  return (
    <div className="flex justify-between ">
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="mb-10 text-5xl">Encurte seu link!</h1>
        <div className="flex">
          <input
            className="bg-black text-white w-4/6 px-8 py-4 rounded-l-xl border mb-6 "
            type="text"
            placeholder="Insira o link que você quer encurtar!"
            value={link}
            id="link"
            onChange={changeHandler}
          />
          <AiFillRightSquare onClick={encurtaLink} className="w-12" />
        </div>

        <p className="border-b-2 border-blue-700 flex text-lg items-center">
          {link === "" ? <p>O link aparecera aqui!</p> : linkCurto}
          <CgCopy className="ml-3" />{" "}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <img src={teste} alt="" className="w-80" />
      </div>
    </div>
  );
};

export default App;
