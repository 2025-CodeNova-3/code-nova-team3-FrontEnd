import MainImg from "../../assets/icons/main.svg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Contents from "../../components/Contents/Contents";
import { Img } from "./Main.styles";
import Comments from "../../components/Comments/Comments";
import Button from "../../components/Button/Button";
export default function Main() {
  return (
    <>
      <Button />
      <Header />
      <Img>
        <img src={MainImg} alt="main img" />
      </Img>
      <Contents />
      <Footer />
      <Comments />
    </>
  );
}
