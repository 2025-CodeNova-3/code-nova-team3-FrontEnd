import styled from "styled-components";

export const Wrapper = styled.div`
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
      background-color: white;
      margin-right: 40px;
      font-weight: 600;
      font-size: 10px;
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
