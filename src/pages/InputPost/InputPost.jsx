import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostHeader from "../../components/PostHeader/PostHeader";
import TextArea from "../../components/TextArea/TextArea";
import PostFooter from "../../components/PostFooter/PostFooter";
import PostTimeSet from "../../components/PostTimeSet/PostTimeSet";
import PostBoard from "../../apis/postBoard";

const InputPost = () => {
  const [content1, setContent1] = useState(""); // FirstInput의 내용
  const [content2, setContent2] = useState(""); // SecondInput의 내용
  const [title, setTitle] = useState(""); // PostFooter의 제목
  const [category, setCategory] = useState(""); // PostFooter의 카테고리
  const [timeOption, setTimeOption] = useState(""); // PostTimeSet의 선택된 옵션
  const [customTime, setCustomTime] = useState(""); // PostTimeSet의 직접 입력 값
  const navigate = useNavigate();

  useEffect(() => {
    console.log(title);
  }, [title]);
  // 서버로 데이터 전송
  const handleSubmit = async () => {
    try {
      // 데이터 타입 검증

      if (
        typeof category !== "string" ||
        typeof title !== "string" ||
        typeof content1 !== "string" ||
        typeof content2 !== "string"
      ) {
        alert("모든 텍스트 입력 값은 문자열이어야 합니다.");
        return;
      }

      // openDuration 숫자 변환
      const duration = Number(timeOption || customTime);
      if (isNaN(duration)) {
        alert("시간은 숫자여야 합니다.");
        return;
      }

      // API 요청 데이터 구성
      const requestData = {
        boardCategory: "BRAND",
        title: title,
        openContent: content1,
        hiddenContent: content2,
        openDuration: duration,
      };

      // API 호출
      const result = await PostBoard(requestData);

      // 응답 처리
      if (result?.status === 200) {
        alert("게시글이 성공적으로 등록되었습니다.");
        navigate("/"); // 성공 시 메인 페이지로 이동
      } else {
        alert("등록에 실패하였습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("게시글 등록 실패:", error);
      alert("게시글 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <PostHeader handleSubmit={handleSubmit} />
      <div style={{ marginTop: "79px" }}></div>
      <TextArea placeholder={"내용을 입력해주세요"} setContent={setContent1} />
      <TextArea
        placeholder={"자유롭게 글을 작성해보세요"}
        setContent={setContent2}
      />
      <PostTimeSet
        selectedOption={timeOption}
        setSelectedOption={setTimeOption}
        setCustomInput={setCustomTime}
      />
      <PostFooter setTitle={setTitle} setCategory={setCategory} />
    </>
  );
};

export default InputPost;
