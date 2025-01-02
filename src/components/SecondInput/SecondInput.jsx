import React, { useState } from "react";
import { Wrapper } from "./SecondInput.styles"

const SecondInput = () => {
  const [content2, setContent2] = useState("");

  const handleChange = (e) => {
    setContent2(e.target.value);
  };

  return (
    <>
      <Wrapper>
        <textarea
          value={content2}
          onChange={handleChange}
          placeholder="자유롭게 글을 작성해보세요"
        />
      </Wrapper>
      <hr style={{ border: "none", borderTop: "1px solid #dbdbdb", marginTop: "5px", marginBottom: "5px" }} />
    </>
  );
};

export default SecondInput;
