import { Wrapper } from "./PostHeader.styels";

import penpen from "../../assets/icons/penpen.svg";
import { useNavigate } from "react-router-dom";
import Tmm from "../../assets/icons/Tmm.svg";
export default function PostHeader({ handleSubmit }) {
  const navigator = useNavigate();
  const handleMain = () => {
    console.log("in");
    navigator("/");
  };

  return (
    <Wrapper>
      <div className="title" onClick={handleMain}>
        <img src={Tmm} alt="Logo" />
      </div>
      <div className="left">
        <button onClick={handleSubmit}>
          <div>게시</div>
          <img src={penpen} alt="penpen" />
        </button>
      </div>
    </Wrapper>
  );
}
