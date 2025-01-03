import {
  TimeTable,
  SelectBox,
  Input,
  Text,
  IconWrapper,
  InputWrapper,
} from "./PostTimeSet.styles";
import Timer from "../../assets/icons/timer.svg";
import { useState } from "react";

const PostTimeSet = ({ selectedOption, setSelectedOption, setCustomInput }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 상태 관리

  // 드롭다운 열고 닫는 함수
  const handleSelectBoxShow = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // 드롭다운 항목 선택 시 실행
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // 항목 선택 후 드롭다운 닫기
  };

  const handleInputChange = (e) => {
    setCustomInput(e.target.value); // 직접 입력값 업데이트
  };

  return (
    <TimeTable>
      <Text>이 내용은</Text>
      <InputWrapper>
        <label className="term">TERM</label>
        {selectedOption !== "direct" ? (
          <SelectBox>
            {/* 버튼 클릭 시 드롭다운 열림 */}
            <button onClick={handleSelectBoxShow}>
              {selectedOption ? `${selectedOption}분` : "-- Please choose --"}
            </button>
            {/* 드롭다운 옵션 리스트 */}
            {isDropdownOpen && (
              <ul className="optionList">
                <li
                  className="optionItem"
                  onClick={() => handleOptionSelect("30")}
                >
                  30분
                </li>
                <li
                  className="optionItem"
                  onClick={() => handleOptionSelect("60")}
                >
                  60분
                </li>
                <li
                  className="optionItem"
                  onClick={() => handleOptionSelect("90")}
                >
                  90분
                </li>
                <li
                  className="optionItem"
                  onClick={() => handleOptionSelect("120")}
                >
                  120분
                </li>
                <li
                  className="optionItem"
                  onClick={() => handleOptionSelect("direct")}
                >
                  직접 입력
                </li>
              </ul>
            )}
          </SelectBox>
        ) : (
          <Input
            type="text"
            onChange={handleInputChange}
            placeholder="시간입력 (분)"
          />
        )}
        <IconWrapper>
          <img src={Timer} alt="Timer Icon" />
        </IconWrapper>
      </InputWrapper>
      <Text>(분) 후에 공개할래요</Text>
    </TimeTable>
  );
};

export default PostTimeSet;
