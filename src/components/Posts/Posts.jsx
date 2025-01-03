import Dot from "../../assets/icons/dot.svg";
import { Content, Wrapper } from "./Posts.styles";

export default function Posts({ posts }) {
  return (
    <Wrapper>
      <Post />
    </Wrapper>
  );
}
const Post = () => {
  return (
    <Content>
      <img src={Dot} />
      <div className="title"></div>
    </Content>
  );
};
