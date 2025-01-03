import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostHeader from '../../components/PostHeader/PostHeader';
import TextArea from '../../components/TextArea/TextArea';
import PostFooter from '../../components/PostFooter/PostFooter';
import PostTimeSet from '../../components/PostTimeSet/PostTimeSet';

const InputPost = () => {
  const [content1, setContent1] = useState(""); // FirstInput의 내용
  const [content2, setContent2] = useState(""); // SecondInput의 내용
  const [title, setTitle] = useState(""); // PostFooter의 제목
  const [category, setCategory] = useState(""); // PostFooter의 카테고리
  const [timeOption, setTimeOption] = useState(""); // PostTimeSet의 선택된 옵션
  const [customTime, setCustomTime] = useState(""); // PostTimeSet의 직접 입력 값
  const navigate = useNavigate();
  
  // 서버로 데이터 전송
  const handleSubmit = () => {
    const payload = {
      content1,
      content2,
      title,
      category,
      timeOption: timeOption === "direct" ? customTime : timeOption, // 직접 입력 값 처리
    };

    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("서버 요청 실패");
        }
        alert("게시글이 성공적으로 작성되었습니다.");
        navigate("/outputpost");
      })
      .catch((error) => {
        console.error("게시글 작성 중 오류:", error);
        // alert("게시글 작성 중 오류가 발생했습니다.");
        navigate("/outputpost");
      });
  };

  return (
    <>
      <PostHeader handleSubmit={handleSubmit} />
      <TextArea placeholder={"내용을 입력해주세요"} setContent={setContent1} />
      <TextArea placeholder={"자유롭게 글을 작성해보세요"} setContent={setContent2}/>
      <PostTimeSet selectedOption={timeOption} setSelectedOption={setTimeOption} setCustomInput={setCustomTime} />
      <PostFooter setTitle={setTitle} setCategory={setCategory} />
    </>
  );
};

export default InputPost;