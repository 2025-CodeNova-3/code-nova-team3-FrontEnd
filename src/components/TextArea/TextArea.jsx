import React from "react";
import { Wrapper } from "./TextArea.styles"

const TextArea = ({ setContent, placeholder }) => {
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Wrapper>
        <textarea
          onChange={handleChange}
          placeholder={placeholder}
        />
      </Wrapper>
      <hr style={{ border: "none", borderTop: "1px solid #dbdbdb", marginTop: "5px", marginBottom: "5px" }} />
    </>
  );
};

export default TextArea;
