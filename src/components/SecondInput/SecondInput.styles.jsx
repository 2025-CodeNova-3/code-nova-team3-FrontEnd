import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  flex-direction: column;
  padding: 0px 25px;
  margin-top: 15px;

  textarea {
    width: 100%;
    height: 200px;
    font-size: 16px;
    padding: 10px;
    border: none;
    outline: none;
    resize: none;
    background-color: transparent;
    font-family: inherit;
    line-height: 1.5;
  }

  textarea::placeholder {
    color: #aaa;
    font-style: italic;
  }
`;