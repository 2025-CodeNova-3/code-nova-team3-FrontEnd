import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 79px;
  width: 100%;
  height: 476px;
  display: flex;
  flex-direction: column;
  padding: 0 90px;
  justify-content: center;
  background-color: black;
  box-sizing: border-box;
  > * {
    color: white;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-bottom: 10px;
`;
export const Desc = styled.div`
  border-top: 1px solid #5d5d5d;
  border-bottom: 1px solid #5d5d5d;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  > .desc-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > .title {
      font-size: 14px;
      color: #b0b0b0;

      margin-bottom: 15px;
    }
    > .menu {
      font-size: 16px;
      font-weight: 550;
      color: #d3d3d3;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
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
