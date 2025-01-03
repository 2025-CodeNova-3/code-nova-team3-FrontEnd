import React, { useState } from "react";
import delete1 from "../../assets/icons/delete1.svg";
import delete2 from "../../assets/icons/delete2.svg";
import Tmm from "../../assets/icons/Tmm.svg";
import line from "../../assets/icons/line.svg";
import { Wrapper, LoginButton, SigninButton } from "./LoginPopup.styles";

export default function LoginPopup({ setOnModal }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    setOnModal(false);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    setOnModal(false);
  };
  const clearInput = (setInputFunc) => {
    setInputFunc(""); // 입력 필드 초기화
  };

  return (
    <Wrapper>
      <button
        type="button"
        className="CloseButton"
        onClick={() => setOnModal(false)}
      >
        <img src={delete1} alt="닫기" />
      </button>
      <img alt="Tmm" src={Tmm} className="ModalLogo" />
      <form>
        <div>
          <label htmlFor="id">아이디 또는 전화번호</label>
          <div className="InputContainer">
            <input
              id="id"
              className="ModalIdInput"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button
              type="button"
              className="ClearButton"
              onClick={() => clearInput(setId)}
            >
              <img src={delete2} alt="초기화" />
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <div className="InputContainer">
            <input
              id="password"
              className="ModalPasswordInput"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="ClearButton"
              onClick={() => clearInput(setPassword)}
            >
              <img src={delete2} alt="초기화" />
            </button>
          </div>
        </div>
      </form>
      <LoginButton className="ModalLoginButton" onClick={handleSignIn}>
        로그인
      </LoginButton>
      <SigninButton>
        <button onClick={handleSignUp}>
          <img src={line} />
          회원가입
          <img src={line} />
        </button>
      </SigninButton>
    </Wrapper>
  );
}
