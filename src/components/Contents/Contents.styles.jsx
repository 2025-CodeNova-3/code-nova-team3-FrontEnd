import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  > section {
    border-top: 1px solid #d3d3d3;
  }
`;
export const Categorys = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 60px 0;
  > * {
    cursor: pointer;
    color: #7d7d7d;
  }
  > .selected {
    color: black;
    font-size: 15px;

    text-decoration: underline;
    text-decoration-thickness: 6px;
    text-decoration-color: black;
    text-underline-offset: 6px; /* 밑줄과 글자 사이의 간격 조정 */
    font-weight: bold;
  }
`;

export const Posts = styled.div`
  width: 860px;
  border-top: 1px solid #d3d3d3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: #7e7e7e;
  font-size: 13.5px;
  margin-top: 20px;
  margin-bottom: 35px;
  .bold {
    font-size: 20px;
    font-weight: 700;
    color: black;
    margin-bottom: 15px;
  }
`;
