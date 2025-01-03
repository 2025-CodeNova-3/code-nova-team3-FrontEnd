import styled from "styled-components";

export default function TimerSkeleton() {
  return (
    <Wrapper>
      <SkeletonBox />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 60%;
  height: 60px;
  margin: 0 auto;
  border: solid #e4e3e3 1px;
  border-top: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const SkeletonBox = styled.div`
  width: 100%;
  height: 100%;
  background: #e0e0e0;
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
`;
