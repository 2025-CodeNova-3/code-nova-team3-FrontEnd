import styled from "styled-components";

export const Comment = styled.div`
  width: 542px;
  height: 92px;
  border-radius: 10px;
  border-bottom-left-radius: 0;

  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #9c9c9c;
  background-color: #727272;
  box-sizing: border-box;
  > .userId {
    font-size: 12px;
  }
  > .comment {
    font-size: 14px;
  }
`;
export const Wrapper = styled.div`
  border-top: 1px solid #5d5d5d;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  box-sizing: border-box;
  padding: 50px 90px;

  > .title {
    font-size: 32px;
    color: white;
  }
`;

export const InputWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
`;

export const InputField = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  outline: none;
  color: #9c9c9c;
  background-color: #ffffff;
  margin-right: 10px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #ec3f0a;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
