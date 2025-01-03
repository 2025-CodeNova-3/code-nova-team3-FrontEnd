import React, { useEffect, useState } from "react";
import Tmm from "../../assets/icons/Tmm.svg";
import Clip from "../../assets/icons/clip.svg";
import { Wrapper, Recent } from "./Sidebar.styles";
import GetRecent from "../../apis/getResent.js";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [recent, setRecent] = useState([]);

  // 서버에서 최근 본 글 가져오기
  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const data = await GetRecent(); // 서버 API 호출
        setRecent(data.data);
        console.log(recent);
      } catch (error) {
        console.error("최근 본 글을 가져오는 중 오류 발생:", error);
      }
    };

    fetchRecentPosts();
  }, []);
  const navigator = useNavigate();
  const handleClick = (post) => {
    console.log(post.boardId);
    navigator("/outputpost/" + post.boardId);
  };

  return (
    <Wrapper>
      <p>방금 본 글</p>
      <Recent>
        <img src={Clip} className="clip" />
        {recent.length > 0 &&
          recent.map((post, index) => (
            <div
              key={index}
              className="wrap"
              onClick={() => handleClick(post)} // 수정된 부분
            >
              <img src={Tmm} />
              <div>CODE NOVA</div>
            </div>
          ))}
      </Recent>
    </Wrapper>
  );
};

export default Sidebar;
