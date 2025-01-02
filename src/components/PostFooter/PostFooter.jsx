import { Wrapper, TitleWrapper, CategoryWrapper, Contact } from "./PostFooter.styles";
import Kakao from "../../assets/icons/kakao.svg";
import Instargram from "../../assets/icons/instargram.svg";
import Pen from "../../assets/icons/pen.svg";
import Naver from "../../assets/icons/naver.svg";
import { useState, useEffect } from "react";


export default function Footer() {
    const [title, setTitle] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <Wrapper>
            <TitleWrapper>
                <div>
                    <div>제목</div>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="제목을 입력하세요"
                    />
                </div>
                <hr />
            </TitleWrapper>
            <CategoryWrapper>
                <select>
                    <option value="essay">에쎄이</option>
                    <option value="poem">포엠</option>
                    <option value="art">아트</option>
                    <option value="novel">노벨</option>
                    <option value="culture">컬쳐</option>
                </select>
            </CategoryWrapper>
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
