import React from "react";
import { Wrapper } from "./PostHeader.styels"
import Logo from "../../assets/icons/logo.svg";
import penpen from "../../assets/icons/penpen.svg";

export default function PostHeader({ handleSubmit }) {
    return (
        <Wrapper>
            <div className="title">
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