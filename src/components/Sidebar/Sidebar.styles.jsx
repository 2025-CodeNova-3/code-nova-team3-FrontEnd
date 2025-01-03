import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 110px;

  bottom: 20%;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > p {
    font-size: 10px;
    margin-bottom: 4px;
  }
`;
export const Recent = styled.div`
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  width: 110px;
  min-height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;
  > .clip {
    position: absolute;
    top: -5px;
    right: 5px;
  }
  > .wrap {
    cursor: pointer;
    margin: 10px 0;
    > img {
      width: 50px;
    }
    > div {
      font-size: 12px;
    }
  }
`;
