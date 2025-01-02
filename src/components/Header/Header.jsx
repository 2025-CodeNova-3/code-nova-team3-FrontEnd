import { Wrapper } from "./Header.styles";

import Search from "../../assets/icons/search.svg";
import Logo from "../../assets/icons/logo.svg";
export default function Header() {
  //세션 확인 부분
  const handleLogin = () => {};
  return (
    <Wrapper>
      <div className="title">
        <img src={Logo} />
      </div>
      <div className="left">
        <button onClick={handleLogin}>로그인</button>
        <form>
          <input type="text" />
          <img src={Search} alt="search icon" />
        </form>
      </div>
    </Wrapper>
  );
}
