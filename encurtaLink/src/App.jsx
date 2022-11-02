import React, { useState } from "react";
import "./index.css";
import short from "./assets/short.svg";
import { CgCopy } from "react-icons/cg";
import { AiFillRightSquare } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

const App = () => {
  const [link, setLink] = useState("");
  const [linkCurto, setLinkCurto] = useState("");
  const API = "https://api.shrtco.de/v2/shorten?url=";

  const changeHandler = (e) => {
    setLink(e.target.value);
  };

  const copiou = (e) => {
    e.currentTarget.classList.add("text-white");
    toast.success("Link Copiado! 😃");
  };

  const encurtaLink = async () => {
    try {
      const response = await fetch(`${API}${link}`);
      const data = await response.json();
      setLinkCurto(data.result.short_link);
      toast.success("Sucesso! clique no link para copiar");
    } catch (error) {
      toast.error("Nao foi possivel encurtar, cheque o link");
    }
  };

  return (
    <div className="flex justify-between ">
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="mb-10 text-5xl font-bold text-teal-100">
          Encurte seu link!
        </h1>
        <div className="flex w-2/3  items-center justify-center mb-6 ">
          <input
            className="text-bold bg-blue-100 text-black  px-8 py-4 rounded-xl border border-black w-full shadow-lg "
            type="text"
            placeholder="Insira o link que você quer encurtar!"
            value={link}
            id="link"
            onChange={changeHandler}
          />
          <AiFillRightSquare
            onClick={encurtaLink}
            className="text-6xl  hover:cursor-pointer  text-blue-200 "
          />
        </div>

        <p className="border-b-2 border-blue-400 flex text-lg items-center">
          {linkCurto === "" ? (
            <p className="text-3xl">O link aparecera aqui!</p>
          ) : (
            <CopyToClipboard text={linkCurto}>
              <div
                onClick={copiou}
                className="hover:cursor-pointer flex justify-center items-center transform duration-100 ease-in-out"
              >
                <p className="text-3xl hover:cursor-pointer py-2 px-3 ">
                  {linkCurto}
                </p>
                <CgCopy className="ml-3 text-3xl " />
                {""}
              </div>
            </CopyToClipboard>
          )}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <img src={short} alt="" className="w-[450px] " />
      </div>
      {/* toast config */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      ;
      <div className="absolute top-2 right-3 flex gap-3 ">
        <a href="https://www.github.com/felipertt" target={"_blank"}>
          <AiFillGithub className=" text-5xl " />
        </a>

        <a href="https://twitter.com/felipertt1" target={"_blank"}>
          <AiFillTwitterCircle className="text-5xl" />
        </a>
      </div>
    </div>
  );
};

export default App;
