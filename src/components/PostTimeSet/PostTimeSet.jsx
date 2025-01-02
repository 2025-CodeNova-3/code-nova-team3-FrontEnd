import React, { useState } from "react";
import { TimeTable, Select, Input, Text } from "./PostTimeSet.styles";

const PostTimeSet = () => {
    const [selectedOption, setSelectedOption] = useState(""); // 현재 선택된 값
    const [customInput, setCustomInput] = useState(""); // 직접 입력된 값

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        if (e.target.value !== "direct") {
            setCustomInput(""); // 선택 변경 시 직접 입력 초기화
        }
    };

    const handleInputChange = (e) => {
        setCustomInput(e.target.value); // 직접 입력된 값 업데이트
    };

    return (
        <TimeTable>
            <Text>이 내용은</Text>

            {selectedOption !== "direct" ? (
                <Select value={selectedOption} onChange={handleSelectChange}>
                    <option value="">항목 선택</option>
                    <option value="30m">30</option>
                    <option value="60m">60</option>
                    <option value="90m">90</option>
                    <option value="120m">120</option>
                    <option value="direct">직접입력</option>
                </Select>
            ) : (
                <Input
                    type="text"
                    value={customInput}
                    onChange={handleInputChange}
                    placeholder="시간입력"
                />
            )}

            <Text>(분) 후에 공개할래요</Text>
        </TimeTable>
    );
};

export default PostTimeSet;
