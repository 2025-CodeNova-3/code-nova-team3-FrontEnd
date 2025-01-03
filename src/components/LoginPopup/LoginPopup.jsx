import { useState } from "react";
import delete1 from "../../assets/icons/delete1.svg";
import Tmm from "../../assets/icons/Tmm.svg";
import line from "../../assets/icons/line.svg";
import Login from "../../apis/login.js";


import { Wrapper, Container, InputBox, Bottom, ModalLogo, CloseButton } from "./LoginPopup.styles";

export default function LoginPopup({ setOnModal, setOnModal2 }) {
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
        setOnModal2(true);
    };
  // 입력 필드 초기화 함수
  const clearInput = (setInputFunc) => {
    setInputFunc(""); // 입력 필드 초기화
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
