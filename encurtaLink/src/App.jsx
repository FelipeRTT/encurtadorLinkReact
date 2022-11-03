import React, { useState } from "react";
import "./index.css";
import short from "./assets/short.svg";
import { CgCopy } from "react-icons/cg";
import { AiFillRightSquare } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const App = () => {
  const [link, setLink] = useState("");
  const [linkCurto, setLinkCurto] = useState("");
  const API = "https://api.shrtco.de/v2/shorten?url=";

  const changeHandler = (e) => {
    setLink(e.target.value);
  };

  const copiou = (e) => {
    e.currentTarget.classList.add("text-blue-400");
    toast.success("Link Copiado! 😃");
  };

  const encurtaLink = async () => {
    try {
      const response = await fetch(`${API}${link}`);
      const data = await response.json();
      setLinkCurto(data.result.short_link);
      toast.success("Sucesso! clique no link para copiar");
    } catch (error) {
      toast.error("Não foi possivel encurtar, verifique o link");
    }
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      className="flex justify-between  flex-col md:flex-row"
    >
      <header className="flex items-center justify-center absolute w-full mt-3">
        <img
          src="./src/assets/link.png"
          alt="logo image"
          className="w-10 mr-1 text-white "
        />
        <h1 className="logo text-white text-3xl ">Encurtai</h1>
      </header>
      <div className="flex flex-col items-center justify-center h-screen w-full ">
        <h1 className="mb-10 text-5xl font-bold text-teal-100">
          Encurte seu link!
        </h1>

        <div className="flex w-2/3  items-center justify-center mb-6 ">
          <input
            className="text-bold bg-blue-100 text-black  px-8 py-4 rounded-xl border border-black w-full shadow-lg "
            type="text"
            placeholder="Insira o link!"
            value={link}
            id="link"
            onChange={changeHandler}
          />
          <AiFillRightSquare
            onClick={encurtaLink}
            className="text-6xl  hover:cursor-pointer  text-blue-200 "
          />
        </div>

        <p className="border-b-2 border-blue-400 text-blue-200 flex text-lg items-center">
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
        <img
          src={short}
          alt="imagem decorativa"
          className=" w-[280px] lg:w-[400px]  "
        />
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
      <div className="absolute  sm:top-3 sm:right-3 bottom-3 right-3 flex justify-self- gap-3 ">
        <a href="https://www.github.com/felipertt" target={"_blank"}>
          <AiFillGithub className=" text-5xl " />
        </a>

        <a href="https://twitter.com/felipertt1" target={"_blank"}>
          <AiFillTwitterCircle className="text-5xl" />
        </a>
      </div>
    </motion.div>
  );
};

export default App;
