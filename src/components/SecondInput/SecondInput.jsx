import React from "react";
import { Wrapper } from "./SecondInput.styles"

const SecondInput = ({setContent2}) => {
  const handleChange = (e) => {
    setContent2(e.target.value);
  };

  return (
    <>
      <Wrapper>
        <textarea
          onChange={handleChange}
          placeholder="의도나 해석을 알려주세요"
        />
      </Wrapper>
      <hr style={{ border: "none", borderTop: "1px solid #dbdbdb", marginTop: "5px", marginBottom: "5px" }} />
    </>
  );
};

export default SecondInput;
