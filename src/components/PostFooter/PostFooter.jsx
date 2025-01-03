import { Wrapper, TitleWrapper, CategoryWrapper, Contact, Nickname } from "./PostFooter.styles";
import Kakao from "../../assets/icons/kakao.svg";
import Instargram from "../../assets/icons/instargram.svg";
import Pen from "../../assets/icons/pen.svg";
import Naver from "../../assets/icons/naver.svg";
import React, { useState, useEffect } from "react";


export default function PostFooter({ title, setTitle, category, setCategory }) {
    const [nickname, setNickname] = useState("@User"); // 서버에서 받아올 사용자 닉네임 기본값

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
                <div>
                    카테고리
                </div>
                <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                    <option value="essay">에쎄이</option>
                    <option value="poem">포엠</option>
                    <option value="art">아트</option>
                    <option value="novel">노벨</option>
                    <option value="culture">컬쳐</option>
                </select>
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
