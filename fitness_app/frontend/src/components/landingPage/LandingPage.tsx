import React from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
const user = "";

const LandingPage = () => {
  const navigate = useNavigate();

  const onButtonPress = () => {
    if (user) {
      navigate("/user");
    }
    navigate("/login");
  };

  return (
    <div className="h-full w-full flex">
      <div className="m-auto flex flex-col items-center space-y-10">
        <h1 className="text-3xl text-justify">Track calories your way!</h1>
        <button
          onClick={() => onButtonPress()}
          className="border-0 border-solid border-black text-2xl font-bold text-zinc-50 py-2 px-4 rounded bg-blue-700"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
