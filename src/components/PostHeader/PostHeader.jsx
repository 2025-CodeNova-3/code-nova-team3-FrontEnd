import React from "react";
import { Wrapper } from "./Header.styles";
import Logo from "../../assets/icons/logo.svg";

export default function PostHeader({ handleSubmit }) {
    return (
        <Wrapper>
            <div className="title">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="left">
                <button onClick={handleSubmit}>게시</button>
            </div>
        </Wrapper>
    );
}