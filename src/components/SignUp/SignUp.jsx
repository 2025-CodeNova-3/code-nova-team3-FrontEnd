import React, { useState } from "react";
import { Wrapper, Modal, InputGroup, CheckButton, InputContainer, SignUpButton, CloseButton, Logo } from "./SignUp.styles";
import TmmLogo from "../../assets/icons/Tmm.svg"; // 로고 이미지
import CloseIcon from "../../assets/icons/delete1.svg"; // 닫기 아이콘

export default function SignUp({ setOnModal, setOnModal2 }) {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const checkId = () => {
        if (!userId) {
            alert("아이디를 다시 입력해주세요!");
            return;
        }
        alert("중복 확인 완료");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userinfo = {
            userId,
            password,
            email,
        };

        console.log("회원가입 정보:", userinfo);
        alert("회원가입 완료!");
        setOnModal2(false);
    };

    return (
        <Wrapper>
            <Modal>
                <CloseButton onClick={() => setOnModal(false)}>
                    <img src={CloseIcon} alt="닫기" />
                </CloseButton>
                <Logo src={TmmLogo} alt="로고" />
                <form onSubmit={handleSubmit}>
                    <InputContainer>
                        <InputGroup>
                            <label htmlFor="userId">아이디</label>
                            <div>
                                <input
                                    id="userId"
                                    type="text"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
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
