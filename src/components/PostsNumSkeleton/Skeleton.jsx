import styled from "styled-components";

export default function Skeleton() {
  return <Wrapper className="pageNum"></Wrapper>;
}
const Wrapper = styled.div`
  display: flex;
  width: 300px;
  height: 45px;
  margin: 0 auto;

  margin-top: 50px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;
