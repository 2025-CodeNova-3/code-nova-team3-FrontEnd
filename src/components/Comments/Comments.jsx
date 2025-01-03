import React, { useState, useEffect } from "react";
import { Wrapper, Comment, InputWrapper, InputField, SubmitButton } from "./Comments.styles";

export default function Comments({ boardId }) {
  const [comments, setComments] = useState([]); // 댓글 리스트 상태
  const [newComment, setNewComment] = useState(""); // 새 댓글 입력 상태

  // 서버에서 댓글 데이터 가져오기
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments/boards/${boardId}`); // 서버 API 호출
        if (!response.ok) {
          throw new Error("댓글 데이터를 가져오는 데 실패했습니다.");
        }
        const data = await response.json(); // 댓글 데이터 (username, text, time)
        setComments(data);
      } catch (error) {
        console.error("댓글 가져오기 오류:", error);
      }
    };

    fetchComments();
  }, [boardId]);

  // 댓글 등록 핸들러
  const handleSubmit = async () => {
    if (!newComment.trim()) {
      alert("댓글을 입력해주세요!");
      return;
    }

    const newCommentData = {
      username: "currentUser", // 현재 사용자 이름
      text: newComment, // 새 댓글 내용
      time: "방금", // 새 댓글 시간 (임시 데이터, 서버에서 처리 가능)
    };

    try {
      // 새 댓글 서버로 전송
      const response = await fetch(`/api/comments/boards/${boardId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCommentData),
      });

      if (!response.ok) {
        throw new Error("댓글 전송 실패");
      }

      // 서버로부터 저장된 댓글 데이터 받기
      const savedComment = await response.json();
      setComments((prevComments) => [...prevComments, savedComment]); // 기존 댓글 리스트에 추가
      setNewComment(""); // 입력 필드 초기화
    } catch (error) {
      console.error("댓글 작성 오류:", error);
      alert("댓글 작성 중 오류가 발생했습니다.");
    }
  };

  return (
    <Wrapper>
      <div className="title">자유롭게 소통해요</div>
      {/* 댓글 리스트 */}
      {comments.map((comment, index) => (
        <Comment key={index}>
          <div className="userid">{comment.username}</div>
          <div className="comment">{comment.text}</div>
          <div className="timer">{comment.time}</div>
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
        <SubmitButton onClick={handleSubmit}>전송</SubmitButton>
      </InputWrapper>
    </Wrapper>
  );
}
