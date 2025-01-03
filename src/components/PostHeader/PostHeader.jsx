import React from "react";
import { Wrapper } from "./PostHeader.styels";
import Logo from "../../assets/icons/logo.svg";
import penpen from "../../assets/icons/penpen.svg";
import { useNavigate } from "react-router-dom";

export default function PostHeader({ handleSubmit }) {
  const navigator = useNavigate();
  const handleMain = () => {
    console.log("in");
    navigator("/");
  };

  return (
    <Wrapper>
      <div className="title" onClick={handleMain}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="left">
        <button onClick={handleSubmit}>
          <div>게시</div>
          <img src={penpen} alt="penpen" />
        </button>
      </div>
    </Wrapper>
  );
}
