import Jazz from "../../assets/Top4/jazz.svg";
import Meaning from "../../assets/Top4/meaning.svg";
import Equipment from "../../assets/Top4/equipment.svg";
import Notwork from "../../assets/Top4/notwork.svg";
import styled from "styled-components";

const TopData = {
  ALL: [
    { src: Jazz, desc: "🎧 선선한 가을밤처럼 자라섬에 드리운 재즈" },
    { src: Equipment, desc: "🧩 단정한 삶을 위한 단정한 도구들" },

    { src: Notwork, desc: "💌 무력한 일상의 의미를 찾는 당신에게" },
    { src: Meaning, desc: "🎙 70만 청년이 일하지 않는 이유" },
  ],
};

export default function Top4({ category }) {
  const datas = TopData[category] || []; // `category`가 없을 경우 빈 배열 반환

  return (
    <Wrapper>
      {datas.map((data, index) => (
        <Top key={index}>
          <img src={data.src} alt={data.desc} className="img" />
          <div className="desc">{data.desc}</div>
        </Top>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 16px; /* 아이템 간 간격 */
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 275px;
  padding: 5px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(78, 78, 78, 0.2);

  box-sizing: border-box;

  .img {
    width: 100%;
    height: 190px;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .desc {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 1.5;
    padding: 0 40px;
    width: inherit;
    height: 83px;
    font-size: 14px;
    font-weight: 550;
    box-sizing: border-box;
  }
`;
