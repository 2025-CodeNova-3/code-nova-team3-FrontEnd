import { useState, useEffect } from "react";
import {
  Wrapper,
  Comment,
  InputWrapper,
  InputField,
  SubmitButton,
} from "./Comments.styles";

import GetComments from "../../apis/getComment";
import PostComments from "../../apis/postComments";

export default function Comments({ boardId }) {
  const [comments, setComments] = useState([]); // 기존 댓글 리스트 상태
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

  // 댓글 전송 핸들러
  const handleSubmit = async () => {
    if (!newComment.trim()) {
      alert("댓글을 입력해주세요.");
      return;
    }

    try {
      // 서버에 댓글 저장
      const newCommentData = await PostComments({
        boardId,
        content: newComment,
      });

      // 사용자 정보 추가
      const updatedComment = {
        ...newCommentData,
        username: sessionStorage.getItem("username"),
        content: newComment,
      };

      // 기존 댓글 리스트와 사용자가 입력한 댓글 리스트 모두 업데이트
      setComments([...comments, updatedComment]);
      setUserComments([...userComments, updatedComment]);

      // 입력창 초기화
      setNewComment("");
    } catch (error) {
      console.error("댓글 전송 중 오류 발생:", error);
      alert("댓글을 저장할 수 없습니다.");
    }
  };

  return (
    <Wrapper>
      <div className="title">자유롭게 소통해요</div>
      <div className="comment-wrap">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            className={
              comment.username === sessionStorage.getItem("username")
                ? "user"
                : ""
            }
          >
            <div className="wrapper">
              <div className="username">@{comment.username}</div>
              <div>{comment.content}</div>
            </div>
          </Comment>
        ))}
      </div>

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
