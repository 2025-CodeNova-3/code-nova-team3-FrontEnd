import { useState } from "react";
import delete1 from "../../assets/icons/delete1.svg";
import delete2 from "../../assets/icons/delete2.svg";
import Tmm from "../../assets/icons/Tmm.svg";
import line from "../../assets/icons/line.svg";
import { Wrapper, LoginButton, SigninButton } from "./LoginPopup.styles";
import Login from "../../apis/login.js";

export default function LoginPopup({ setOnModal, login, setLogin }) {
  // 상태 관리 추가
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await Login(username, password);
      setOnModal(false); // 모달 닫기
      if (result.code == 2000) {
        setLogin(true);
        sessionStorage.setItem("login", true);
        sessionStorage.setItem("accessToken", result.data.access);
      } else if (result.status.code == 2001) {
        //회원가입창으로 이동
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // 회원가입 버튼 함수
  const handleSignUp = (e) => {
    e.preventDefault();
    setOnModal(false);
  };

  // 입력 필드 초기화 함수
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
              id="username"
              className="ModalIdInput"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              type="button"
              className="ClearButton"
              onClick={() => clearInput(setUsername)}
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
          <img src={line} alt="line" />
          회원가입
          <img src={line} alt="line" />
        </button>
      </SigninButton>
    </Wrapper>
  );
}
