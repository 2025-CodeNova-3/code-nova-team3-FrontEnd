import React, { useEffect, useState } from "react";
import { Wrapper } from "./FirstOutput.styles";

const FirstOutput = () => {
    const [content1, setContent] = useState("");

    useEffect(() => {
        fetch("/api/post/1")
            .then((res) => res.json())
            .then((data) => {
                setContent(data.content1);
            })
            .catch((error) => {
                console.error("게시글 데이터를 불러오는 중 오류 발생:", error);
            });
    }, []);

    return (
        <Wrapper>{content1}</Wrapper>
    )
};

export default FirstOutput;