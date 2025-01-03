import React from "react";
import { TimeTable, Select, Input, Text } from "./PostTimeSet.styles";

const PostTimeSet = ({ selectedOption, setSelectedOption, setCustomInput }) => {
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value); // 드롭다운 선택값 업데이트
    };

    const handleInputChange = (e) => {
        setCustomInput(e.target.value); // 직접 입력값 업데이트
    };

    return (
        <TimeTable>
            <Text>이 내용은</Text>
            <Text>이 내용은</Text>
            {/* 조건부 렌더링: selectedOption이 "direct"일 경우 드롭다운 숨기기 */}
            {selectedOption !== "direct" ? (
                <Select onChange={handleSelectChange}>
                    <option value="">항목 선택</option>
                    <option value="30">30분</option>
                    <option value="60">60분</option>
                    <option value="90">90분</option>
                    <option value="120">120분</option>
                    <option value="direct">직접입력</option>
                </Select>
            ) : (
                <Input
                    type="text"
                    onChange={handleInputChange}
                    placeholder="시간입력 (분)"
                />
            )}
            <Text>(분) 후에 공개할래요</Text>
        </TimeTable>
    );
};

export default PostTimeSet;
