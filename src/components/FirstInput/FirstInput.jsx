import React from "react";
import { Wrapper } from "./FirstInput.styles"

const FirstInput = ({ setContent1 }) => {
  const handleChange = (e) => {
    setContent1(e.target.value);
  };

  return (
    <>
    <Wrapper>
      <textarea
        onChange={handleChange}
        placeholder="자유롭게 글을 작성해보세요"
      />
    </Wrapper>
    <hr style={{ border: "none", borderTop: "1px solid #dbdbdb", marginTop: "5px" , marginBottom: "5px"}} />
  </>
  );
};

export default FirstInput;
