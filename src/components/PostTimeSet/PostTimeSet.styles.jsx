import styled from "styled-components";

export const TimeTable = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5px;
  border: 1.5px solid #b0b0b0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 210px; /* width를 210px로 설정 */
  height: 56px;
  box-sizing: border-box;

  > .term {
    position: absolute;
    top: -10px;
    left: 10px;
    color: #b0b0b0;
    background-color: white;
    padding: 0 5px;
    z-index: 1;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  color: #b0b0b0;
`;

export const SelectBox = styled.div`
  width: 210px; /* InputWrapper와 동일한 width로 설정 */
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;

  button {
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    font-size: 14px;
    background-color: #fff;
    text-align: left;
    cursor: pointer;
    box-sizing: border-box;
    color: #a0a0a0;
    font-weight: bold;
  }

  .optionList {
    position: absolute;
    width: 210px; /* SelectBox와 동일한 width로 설정 */
    top: 54px;
    left: -6px; /* 왼쪽 여백 제거 */
    border: 1.5px solid #a0a0a0;
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #fff;
    box-sizing: border-box;

    .optionItem {
      padding: 10px;
      font-size: 14px;
      cursor: pointer;
      color: #a0a0a0;
    }
  }
`;

export const Input = styled.input`
  width: 150px;
  height: 54px;
  padding: 5px 10px;
  font-size: 14px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #fff;
  outline: none;
  box-sizing: border-box;
`;

export const IconWrapper = styled.div`
  width: 29px;
  height: 30px;
`;
