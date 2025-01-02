import { Wrapper, Logo, Desc, Contact } from "./Footer.styles";
import LogoImg from "../../assets/icons/logoB.svg";
import Kako from "../../assets/icons/kakao.svg";
import Instargram from "../../assets/icons/instargram.svg";
import Pen from "../../assets/icons/pen.svg";
import Naver from "../../assets/icons/naver.svg";

export default function Footer() {
  return (
    <Wrapper>
      <Logo>
        <img src={LogoImg} alt="logo" />
      </Logo>
      <Desc>
        <div className="desc-wrapper">
          <div className="title">About</div>
          <div className="menu">
            <p>브랜드 소개</p>
            <p>팀 소개</p>
          </div>
        </div>
        <div className="desc-wrapper">
          <div className="title">Contact</div>
          <div className="menu">
            <p>광고 & 제휴 문의</p>
            <p>에디터 지원</p>
          </div>
        </div>
        <div className="desc-wrapper">
          <div className="title">News letter</div>
          <div className="menu">
            <p>뉴스레터 구독</p>
          </div>
        </div>
      </Desc>
      <Contact>
        <p>editor@antiegg.kr ㅣ 0507-1336-9142 © ANTIEGG All rights reserved</p>
        <div className="icons">
          <img src={Pen} alt="icon" />
          <img src={Naver} alt="icon" />
          <img src={Instargram} alt="icon" />
          <img src={Kako} alt="icon" />
        </div>
      </Contact>
    </Wrapper>
  );
}
