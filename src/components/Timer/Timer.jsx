import styled from "styled-components";
import TimerIcon from "../../assets/icons/timer.svg";

// eslint-disable-next-line react/prop-types
export default function Timer({ lasttime = "2분 30초", color }) {
  return (
    <Wrapper color={color}>
      <img src={TimerIcon} />
      <p>{lasttime} 남았습니다.</p>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 60%;
  height: 60px;
  margin: 0 auto;
  border: solid #e4e3e3 1px;
  border-top: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  > p {
    font-size: 21px;
    font-weight: 600;
    color: ${(props) => props.color};
  }
`;
