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
  ESSAY: [
    { src: Jazz, desc: "🎧 선선한 가을밤처럼 드리운 생각의 조각들" },
    { src: Equipment, desc: "✍️ 사소한 일상 속에 숨겨진 커다란 이야기" },
    { src: Notwork, desc: "🍂 흩날리는 낙엽처럼 마음을 적시는 기록" },
    { src: Meaning, desc: "☕ 따뜻한 커피 한 잔과 함께 떠나는 사색의 시간" },
  ],
  POEM: [
    { src: Jazz, desc: "🌙 고요한 밤하늘에 흩뿌린 별빛 같은 단어들" },
    { src: Equipment, desc: "🌿 바람에 흔들리는 잎새처럼 떨리는 감정" },
    { src: Notwork, desc: "🌊 마음 깊은 곳에서 피어오른 작은 파도" },
    { src: Meaning, desc: "🌼 피어나는 꽃잎에 담긴 찰나의 아름다움" },
  ],
  NOVEL: [
    { src: Jazz, desc: "📖 아직 끝나지 않은 이야기의 시작" },
    { src: Equipment, desc: "🔮 낯선 세계로 이끄는 문이 열립니다" },
    { src: Notwork, desc: "🌌 머릿속에서 펼쳐지는 또 하나의 현실" },
    { src: Meaning, desc: "🎭 인물들의 속삭임이 들려오는 순간" },
  ],
  BOOK: [
    { src: Jazz, desc: "📚 책 속의 세계를 떠나와 남겨진 생각들" },
    { src: Equipment, desc: "✏️ 한 권의 책이 남긴 잔잔한 파문" },
    { src: Notwork, desc: "🌿 작가의 시선 너머로 바라본 세상" },
    { src: Meaning, desc: "💬 단어 사이에 숨은 의미를 발견하다" },
  ],
  SOCIAL: [
    { src: Jazz, desc: "🌍 변화하는 세상 속에서 느낀 단상" },
    { src: Equipment, desc: "🏛️ 오늘을 만든 어제, 그리고 내일에 대한 사유" },
    { src: Notwork, desc: "🗣️ 다양한 목소리 속에서 찾은 새로운 시각" },
    { src: Meaning, desc: "📡 우리 사회를 비추는 거울 같은 이야기" },
  ],
  ROMANCE: [
    { src: Jazz, desc: "💌 설렘으로 시작해 여운으로 남는 순간들" },
    { src: Equipment, desc: "🌹 가슴 속 깊이 스며든 따뜻한 감정" },
    { src: Notwork, desc: "🌄 눈부신 아침 햇살처럼 다가온 사랑" },
    { src: Meaning, desc: "🕊️ 마음이 닿는 곳에서 시작된 이야기" },
  ],
  COMEDY: [
    { src: Jazz, desc: "😂 웃음 속에 담긴 진실과 유쾌한 순간들" },
    { src: Equipment, desc: "🎭 가벼운 농담 속에 스며든 진지한 메시지" },
    { src: Notwork, desc: "🥳 일상 속에 숨어 있는 작은 유머들" },
    { src: Meaning, desc: "🌈 웃음이 머무는 곳에 생기는 행복" },
  ],
  SF: [
    { src: Jazz, desc: "🚀 끝없는 우주 속에서 피어난 상상력" },
    { src: Equipment, desc: "🤖 기계와 인간의 경계를 넘나드는 이야기" },
    { src: Notwork, desc: "🌌 미래를 향한 끝없는 호기심의 여정" },
    { src: Meaning, desc: "🔍 과학과 환상이 만나 탄생한 새로운 세계" },
  ],
  FANTASY: [
    { src: Jazz, desc: "🏰 마법과 신화가 어우러진 환상의 세계" },
    { src: Equipment, desc: "🐉 용이 날고 별이 춤추는 이야기" },
    { src: Notwork, desc: "🗡️ 운명과 모험이 교차하는 신비로운 여정" },
    { src: Meaning, desc: "🌠 상상 속에서 현실이 된 또 다른 세계" },
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
