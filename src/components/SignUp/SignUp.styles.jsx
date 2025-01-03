import styled from "styled-components";

// 팝업 전체 컨테이너
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 배경 반투명 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 팝업 내부 컨테이너
export const Modal = styled.div`
  background: #fff;
  position: relative;
  width: 469px;
  height: 602px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// 입력 필드 그룹
export const InputGroup = styled.div`
  direction: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 30px;
  text-align: left;

  label {
    display: block;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  input {
    width: 285px;
    height: 34px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 18px;

    &::placeholder {
      color: #aaa;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
`;

// 중복 확인 버튼
export const CheckButton = styled.button`
  width: 100px;
  height: 44px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

// 회원가입 버튼
export const SignUpButton = styled.button`
  width: 410px;
  padding: 15px;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

// 닫기 버튼 (오른쪽 상단)
export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

// 로고 스타일
export const Logo = styled.img`
  width: 125px;
  height: 40px;
  margin: 0 auto 50px;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
