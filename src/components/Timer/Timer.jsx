import styled from "styled-components";
import TimerIcon from "../../assets/icons/timer.svg";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Timer({ setHidden, openTime, color }) {
  const [lastTime, setLastTime] = useState(() =>
    calculateRemainingTime(openTime)
  );

  useEffect(() => {
    // 1초마다 남은 시간 업데이트
    const interval = setInterval(() => {
      const remainingTime = calculateRemainingTime(openTime);
      setLastTime(remainingTime);

      // 시간이 종료되면 setHidden 호출
      if (remainingTime === "시간이 종료되었습니다.") {
        setHidden(true);
        clearInterval(interval);
      }
    }, 1000);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, [openTime, setHidden]);

  return (
    <Wrapper color={color}>
      <img src={TimerIcon} alt="Timer Icon" />
      <p>{lastTime} 남았습니다.</p>
    </Wrapper>
  );
}

function calculateRemainingTime(openTime) {
  const now = new Date();
  const openDate = new Date(openTime);
  const diffMs = openDate - now;

  if (diffMs <= 0) {
    return "시간이 종료되었습니다.";
  }

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  return `${padZero(hours)}시간 ${padZero(minutes)}분 ${padZero(seconds)}초`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
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
