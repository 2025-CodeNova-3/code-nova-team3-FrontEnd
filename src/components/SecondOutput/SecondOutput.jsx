import React, { useEffect, useState } from "react";
import { Wrapper } from "./SecondOutput.styles";

const SecondOutput = () => {
    const [content2, setContent2] = useState("");

    useEffect(() => {
        fetch("/api/post/1")
            .then((res) => res.json())
            .then((data) => {
                setContent2(data.Content2);
            })
            .catch((error) => {
                console.error("게시글 데이터를 불러오는 중 오류 발생:", error);
            });
    }, []);

    return (
        <Wrapper>{content2}</Wrapper>
    )
};

export default SecondOutput;