import React, { useEffect, useState } from "react";
import OutputFooter from '../../components/OutputFooter/OutputFooter';
import Header from '../../components/Header/Header';

const OutputPost = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/api/post/1")
      .then((res) => res.json())
      .then((data) => setContent(data.content))
      .catch((error) => {
        console.error("게시글 데이터를 불러오는 중 오류 발생:", error);
      });
  }, []);

  return (
    <>
    <Header />
    <div>{content}</div>
    <OutputFooter />
    </>
  );
};

export default OutputPost;
