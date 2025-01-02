export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  resize: none;

  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
`;