import { useState } from "react";
import {
  Wrapper,
  Modal,
  InputGroup,
  CheckButton,
  InputContainer,
  SignUpButton,
  CloseButton,
  Logo,
} from "./SignUp.styles";
import TmmLogo from "../../assets/icons/Tmm.svg"; // 로고 이미지
import CloseIcon from "../../assets/icons/delete1.svg"; // 닫기 아이콘
import PostSignUp from "../../apis/postSignUp"; // 회원가입 API 함수 가져오기

export default function SignUp({ setOnModal, setOnModal2 }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // 아이디 중복 확인
  const checkId = () => {
    if (!username) {
      alert("아이디를 다시 입력해주세요!");
      return;
    }
    alert("중복 확인 완료");
  };

  // 회원가입 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 회원가입 데이터 구성
    const userinfo = {
      username,
      password,
      email,
    };

    try {
      // 회원가입 API 호출
      const response = await PostSignUp(userinfo);

      if (response) {
        alert("회원가입이 성공적으로 완료되었습니다!");
        setOnModal2(false); // 모달 닫기
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Wrapper>
      <Modal>
        <CloseButton onClick={() => setOnModal2(false)}>
          <img src={CloseIcon} alt="닫기" />
        </CloseButton>
        <Logo src={TmmLogo} alt="로고" />
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <InputGroup>
              <label htmlFor="userName">아이디</label>
              <div>
                <input
                  id="userName"
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="영어로 입력해주세요"
                />
                <CheckButton type="button" onClick={checkId}>
                  중복 확인
                </CheckButton>
              </div>
            </InputGroup>

            <InputGroup>
              <label htmlFor="email">이메일</label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="영어로 입력해주세요"
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="8자리 이상 입력해주세요"
              />
            </InputGroup>
          </InputContainer>
          <SignUpButton type="submit">회원 가입</SignUpButton>
        </form>
      </Modal>
    </Wrapper>
  );
}
