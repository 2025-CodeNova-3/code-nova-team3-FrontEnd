import { Wrapper } from "./Header.styles";
import Search from "../../assets/icons/search.svg";
import Logo from "../../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header({ setOnModal, login, setLogin }) {
  const navigator = useNavigate();

  // 메인 페이지 이동
  const handleMain = () => {
    navigator("/");
  };

  // 로그인 버튼 클릭 시
  const handleLogin = () => {
    setOnModal(true);
  };

  // 로그아웃 버튼 클릭 시
  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <Wrapper>
      <div className="title" onClick={handleMain}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="left">
        {/* 로그인 상태에 따라 버튼 텍스트 변경 */}
        {login ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <button onClick={handleLogin}>로그인</button>
        )}
        <form>
          <input type="text" />
          <img src={Search} alt="search icon" />
        </form>
      </div>
    </Wrapper>
  );
}
