import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 276px;
  display: flex;
  flex-direction: column;
  padding: 0 90px;
  justify-content: center;
  background-color: black;
  box-sizing: border-box;
  > * {
    color: white;
    box-sizing: border-box;
  }
`;
export const TitleWrapper = styled.div`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  outline: none;
  width: 100%;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ffffff;
`;
export const Nickname = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;
  font-size: 14px;
  color: #797979;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  gap: 10px;
  margin-top: 15px;

  div {
    font-size: 16px;
  }

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
