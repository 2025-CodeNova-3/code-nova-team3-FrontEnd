import styled from "styled-components";

export default function Comments() {
  return (
    <Wrapper>
      <Comment>
        <div className="userid">df</div>
        <div className="comment">dff</div>
        <div className="timer">10분전</div>
      </Comment>
      <Comment>
        <div className="userid">df</div>
        <div className="comment">dff</div>
        <div className="timer">10분전</div>
      </Comment>
      <Comment>
        <div className="userid">df</div>
        <div className="comment">dff</div>
        <div className="timer">10분전</div>
      </Comment>
    </Wrapper>
  );
}
const Comment = styled.div`
  width: 100%;
  border: 0.5px solid white;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #9c9c9c;
  box-sizing: border-box;
  > .userId {
    font-size: 12px;
  }
  > .comment {
    font-size: 14px;
  }
  > .timer {
    font-size: 10px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  box-sizing: border-box;
  padding: 50px 90px;
`;
