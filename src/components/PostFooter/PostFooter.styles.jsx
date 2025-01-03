import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 276px;
  display: flex;
  flex-direction: column;
  padding: 0 90px;
  justify-content: center;
  background-color: black;
  box-sizing: border-box;
  > * {
    color: white;
    box-sizing: border-box;
  }
`;
export const TitleWrapper = styled.div`
  input {
    background-color: transparent; /* 배경 투명 */
    border: none; /* 테두리 제거 */
    color: white; /* 텍스트 색상 */
    font-size: 16px; /* 텍스트 크기 */
    outline: none; /* 포커스 시 테두리 제거 */
    width: 100%; /* 원하는 너비 */
    margin-bottom: 10px;
  }

  input::placeholder {
    color: #ccc; /* 플레이스홀더 색상 */
    font-style: italic; /* 플레이스홀더 스타일 */
  }

  hr {
    border: none;
    border-top: 1px solid white;
    margin: 0;
  }
`;
export const Nickname = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #797979;
`;
export const CategoryWrapper = styled.div`
  display: flex; /* 플렉스 박스 활성화 */
  flex-direction: row; /* 가로로 나열 */
  align-items: center; /* 세로 정렬(중앙 정렬) */
  gap: 10px; /* 요소 간 간격 */
  margin-top: 15px;

  div {
    font-size: 16px;
  }

  select {
    width: 200px;
    height: 30px;
    background: none;
    border: 1px solid white;
    color: white;
    font-size: 14px;
    padding: 5px;
    outline: none;
  }
`;

export const Contact = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: space-between;
  > p {
    color: #797979;
    font-size: 11px;
  }
  > .icons {
    display: flex;
    gap: 10px;
    align-items: center;
    > img {
      width: 25px;
      height: 25px;
    }
  }
`;
