import { Wrapper, TitleWrapper, CategoryWrapper, Contact, Nickname } from "./OutputFooter.styles";
import Kakao from "../../assets/icons/kakao.svg";
import Instargram from "../../assets/icons/instargram.svg";
import Pen from "../../assets/icons/pen.svg";
import Naver from "../../assets/icons/naver.svg";
import { useState, useEffect } from "react";


export default function OutPutFooter() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [nickname, setNickname] = useState("@User");

    useEffect(() => {
        fetch("/api/user")
            .then((res) => res.json())
            .then((data) => {
                setTitle(data.title);
                setCategory(data.category);
            })
            .catch(() => setNickname("@User"));
    }, []);

    return (
        <Wrapper>
            <TitleWrapper>
                <div>제목</div>
                <div>{title}</div>
            </TitleWrapper>
            <CategoryWrapper>
                <div>카테고리</div>
                <div>|</div>
                <div>{category}</div>
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
