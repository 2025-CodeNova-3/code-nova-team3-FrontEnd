import styled from "styled-components";

// 팝업 전체 Wrapper
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

// 팝업 내부 Container
export const Container = styled.div`
  background: #fff;
  width: 452px;
  height: 441px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;
  box-sizing: border-box;
`;

// 닫기 버튼 스타일
export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 15px;
  background: transparent;
  border: none;
  cursor: pointer;

  img {
    
    width: 20px;
    height: 20px;
  }
`;

// 로고 스타일
export const ModalLogo = styled.img`
  width: 122px;
  height: 41px;
  margin-bottom: 50px;
`;

// 입력 필드 Wrapper
export const InputBox = styled.div`
width: 360px;
  margin-bottom: 20px;
  text-align: left;

  div {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    direction: flex;
    flex-direction: center;
    width: 340px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;

    &::placeholder {
      color: #aaa;
    }
  }
`;

// 하단 버튼 Wrapper
export const Bottom = styled.div`
  margin-top: 20px;

  .ModalLoginButton {
    width: 380px;
    padding: 15px;
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
  }

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      margin: 0 10px;
    }

    .SigninButton {
      background: none;
      border: none;
      color: #555;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
        color: #000;
      }
    }
  }
`;
