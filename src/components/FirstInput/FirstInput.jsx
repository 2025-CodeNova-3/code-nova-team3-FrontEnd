import React, { useState } from "react";
import { Wrapper } from "./FirstInput.styles"

const FirstInput = () => {
  const [content1, setContent1] = useState("");

  const handleChange = (e) => {
    setContent1(e.target.value);
  };

  return (
    <>
    <Wrapper>
      <textarea
        value={content1}
        onChange={handleChange}
        placeholder="자유롭게 글을 작성해보세요"
      />
    </Wrapper>
    <hr style={{ border: "none", borderTop: "1px solid #dbdbdb", marginTop: "5px" , marginBottom: "5px"}} />
  </>
  );
};

export default FirstInput;
