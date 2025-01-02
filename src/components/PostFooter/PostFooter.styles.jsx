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
export const TitleWrapper = styled.div`
  div {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  hr {
    border: none;
    border-top: 1px solid white;
    margin: 0;
  }
`;
export const Nickname = styled.Nickname`
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
export const CategoryWrapper = styled.div`
  margin-top: 20px;
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
