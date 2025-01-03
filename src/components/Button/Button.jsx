import styled from "styled-components";
import Pen from "../../assets/icons/pen.svg";
import { useNavigate } from "react-router-dom";
export default function Button() {
  const navigator = useNavigate();
  const handleWrite = () => {
    navigator("/inputpost");
  };

  return (
    <Wrapper onClick={handleWrite}>
      글쓰기
      <img src={Pen} />
    </Wrapper>
  );
}
const Wrapper = styled.button`
  position: fixed;
  right: 10%;
  bottom: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 264px;
  height: 47px;
  border-radius: 21px;
  cursor: pointer;

  background-color: #b5b5b5;
  font-size: 16px;
  font-weight: bold;
  color: white;
  > img {
    width: 14px;
    height: 18px;
  }
`;
