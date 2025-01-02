import React, { useState } from "react";

const InputContext = ({ title, placeholder }) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <h3>{title}</h3>
      <textarea
        value={content}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputContext;
