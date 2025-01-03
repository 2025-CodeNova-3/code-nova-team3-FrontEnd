import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  height: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  border-bottom: 1px solid #dadada;
  > .left {
    display: flex;
    > button {
      color: white;
      background-color: black;
      margin-right: 40px;
      font-weight: 600;
      font-size: 10px;
      display: flex; /* 버튼 내부의 요소를 flex로 배치 */
      flex-direction: row; /* 텍스트와 이미지가 가로로 배치되도록 설정 */
      align-items: center; /* 텍스트와 이미지를 수직 가운데 정렬 */
      gap: 3px; /* 텍스트와 이미지 사이 간격 */
      padding: 5px 10px; /* 버튼 내부 여백 */
    }
    > form {
      display: flex;
      justify-content: space-between;
      width: 264px;
      height: 30px;
      border-radius: 21px;
      box-shadow: 0px 3px #dbdbdb;
      padding: 3px 10px;

      box-sizing: border-box;
      > img {
        cursor: pointer;
      }
    }
  }
  box-sizing: border-box;
`;
