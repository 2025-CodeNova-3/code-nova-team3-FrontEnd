import styled from "styled-components";
export const Content = styled.div`
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