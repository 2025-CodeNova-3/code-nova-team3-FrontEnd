import { useNavigate } from "react-router-dom";
import Dot from "../../assets/icons/dot.svg";
import { Content, Wrapper } from "./Posts.styles";

export default function Posts({ posts }) {
  console.log(posts);
  const navigate = useNavigate();

  return (
    <Wrapper>
      {posts.map((data) => (
        <Post
          key={data.boardId}
          title={data.title}
          boardId={data.boardId}
          navigate={navigate} // ✅ navigate 함수 전달
        />
      ))}
    </Wrapper>
  );
}

// ✅ Post 컴포넌트 수정
const Post = ({ title, boardId, navigate }) => {
  // ✅ 클릭 시 해당 게시물의 boardId로 이동
  const handleGetBoard = () => {
    navigate(`/outputpost/${boardId}`);
  };

  return (
    <Content onClick={handleGetBoard}>
      <img src={Dot} alt="dot icon" />
      <div className="title">{title}</div> {/* 게시물 제목 표시 */}
    </Content>
  );
};
