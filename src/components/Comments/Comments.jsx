import { useState, useEffect } from "react";
import {
  Wrapper,
  Comment,
  InputWrapper,
  InputField,
  SubmitButton,
} from "./Comments.styles";
import GetComments from "../../apis/getComments";

export default function Comments({ boardId }) {
  const [comments, setComments] = useState([]); // 댓글 리스트 상태
  const [newComment, setNewComment] = useState(""); // 새 댓글 입력 상태
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await GetComments({ boardId });
        setComments(data.data);
      } catch (error) {
        console.error("댓글을 가져오는 중 오류 발생:", error);
      }
    };

    fetchComments();
  }, [boardId]);
  return (
    <Wrapper>
      <div className="title">자유롭게 소통해요</div>

      {comments.map((comment, index) => (
        <Comment key={index}>
          <div>
            <div className="userid">@{comment.username}</div>
            <div className="comment">{comment.comment}</div>
          </div>
        </Comment>
      ))}
      {/* 댓글 입력창 */}
      <InputWrapper>
        <InputField
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="작품에 관하여 자유롭게 의견을 나눠보세요"
        />
        <SubmitButton>전송</SubmitButton>
      </InputWrapper>
    </Wrapper>
  );
}
