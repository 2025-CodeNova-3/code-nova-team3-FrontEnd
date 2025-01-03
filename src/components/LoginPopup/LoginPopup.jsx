import React, { useState } from "react";
import delete1 from "../../assets/icons/delete1.svg";
import Tmm from "../../assets/icons/Tmm.svg";
import line from "../../assets/icons/line.svg";
import { Wrapper, Container, InputBox, Bottom, ModalLogo, CloseButton } from "./LoginPopup.styles";

export default function LoginPopup({ setOnModal, setOnModal2 }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault();
        setOnModal(false);
    };
    const handleSignUp = (e) => {
        e.preventDefault();
        setOnModal(false);
        setOnModal2(true);
    };

    return (
        <Wrapper>
            <Container>
            <CloseButton
                type="button"
                className="CloseButton"
                onClick={() => setOnModal(false)}
            >
                <img src={delete1} alt="닫기" />
            </CloseButton>

            <ModalLogo alt="Tmm" src={Tmm} className="ModalLogo" />

            <InputBox>
                <div>이름</div>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </InputBox>
            <InputBox>
                <div>비밀번호</div>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputBox>

            <Bottom>
                <button className="ModalLoginButton" onClick={handleSignIn}>
                    로그인
                </button>
                <div>
                    <img src={line} />
                    <button className="SigninButton" onClick={handleSignUp}>
                        회원가입
                    </button>
                    <img src={line} />
                </div>
            </Bottom>
            </Container>
        </Wrapper>
    );
}
