import { useState } from "react";
import { Wrapper, Categorys, Posts, Title } from "./Contents.styles";
import Top4 from "../Top4/Top4";
export default function Contents() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", "에세이", "포엠", "노벨", "아트", "컬쳐"];
  const contents = {
    ALL: "All Content",
    에세이: "Essay Content",
    포엠: "Poem Content",
    노벨: "Novel Content",
    아트: "Art Content",
    컬쳐: "Culture Content",
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Wrapper>
      <Categorys>
        {categories.map((category) => (
          <p
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? "selected" : ""}
          >
            {category}
          </p>
        ))}
      </Categorys>
      <section>
        <Title>
          <p className="bold">많은 이들의 시선을 사로잡는 이야기</p>
          <p>문화예술을 향유하는 다채로운 방식을 담습니다.</p>
        </Title>
        <Top4 category={selectedCategory} />
        <Posts>{contents[selectedCategory]}</Posts>
      </section>
    </Wrapper>
  );
}
