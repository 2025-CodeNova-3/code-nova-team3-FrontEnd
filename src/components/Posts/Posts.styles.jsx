import styled from "styled-components";

export const Content = styled.div`
  cursor: pointer;
  width: inherit;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #f2f2f2;
  margin-left: 20px;

  > .title {
    margin-left: 20px;
    width: 200px;
    height: 20px;
    white-space: nowrap; /* 줄바꿈 방지 */
    overflow: hidden; /* 넘치는 텍스트 숨기기 */
    text-overflow: ellipsis; /* 넘치는 부분에 ... 표시 */
  }
`;

export const Wrapper = styled.div`
  width: 860px;
  border-top: 1px solid #d3d3d3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;
