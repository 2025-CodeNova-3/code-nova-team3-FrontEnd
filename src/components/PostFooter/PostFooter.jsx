import {
  Wrapper,
  TitleWrapper,
  CategoryWrapper,
  Contact,
  Nickname,
} from "./PostFooter.styles";
import Kakao from "../../assets/icons/kakao.svg";
import Instargram from "../../assets/icons/instargram.svg";
import Pen from "../../assets/icons/pen.svg";
import Naver from "../../assets/icons/naver.svg";
import { useState, useEffect } from "react";

export default function PostFooter({ title, setTitle, category, setCategory }) {
  const [nickname, setNickname] = useState("@User"); // 서버에서 받아올 사용자 닉네임 기본값
  const categories = [
    "ESSAY",
    "POEM",
    "NOVEL",
    "BOOK",
    "SOCIAL",
    "ROMANCE",
    "COMEDY",
    "SF",
    "FANTASY",
  ];
  // 카테고리 선택 함수
  const handleClick = (e) => {
    // 클릭된 요소 확인
    console.log(e.target);

    // 선택된 카테고리 값을 상태에 저장
    const selectedCategory = e.target.innerText;
    setCategory(selectedCategory);

    // 모든 카테고리 항목에서 .click 클래스 제거
    const allCategories = document.querySelectorAll(".categories p");
    allCategories.forEach((category) => category.classList.remove("click"));

    // 클릭된 항목에 .click 클래스 추가
    e.target.classList.add("click");
  };

  useEffect(() => {
    // 서버에서 사용자 닉네임 가져오는 로직 (예제)
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setNickname(data.nickname))
      .catch(() => setNickname("@User")); // 오류 시 기본값
  }, []);

  return (
    <Wrapper>
      <TitleWrapper>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
        <hr />
      </TitleWrapper>
      <CategoryWrapper>
        <div className="title">카테고리</div>
        <div className="categories">
          {categories.map((category, index) => (
            <p key={index} onClick={handleClick}>
              {category}
            </p>
          ))}
        </div>
      </CategoryWrapper>
      <Nickname>{nickname}</Nickname>
      <Contact>
        <p>editor@antiegg.kr ㅣ 0507-1336-9142 © ANTIEGG All rights reserved</p>
        <div className="icons">
          <img src={Pen} alt="icon" />
          <img src={Naver} alt="icon" />
          <img src={Instargram} alt="icon" />
          <img src={Kakao} alt="icon" />
        </div>
      </Contact>
    </Wrapper>
  );
}
