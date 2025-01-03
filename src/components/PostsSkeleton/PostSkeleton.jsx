import styled from "styled-components";
import Dot from "../../assets/icons/dot.svg";
export default function PostSkeleton() {
  return (
    <Wrapper>
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </Wrapper>
  );
}
const Content = () => {
  return (
    <SkeletonContent>
      <img src={Dot} />
      <div className="title"></div>
    </SkeletonContent>
  );
};
const Wrapper = styled.div`
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
const SkeletonContent = styled.div`
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
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;
