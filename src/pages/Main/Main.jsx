import MainImg from "../../assets/icons/main.svg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Contents from "../../components/Contents/Contents";
import { Img } from "./Main.styles";
export default function Main() {
  return (
    <>
      <Header />
      <Img>
        <img src={MainImg} alt="main img" />
      </Img>
      <Contents />
      <Footer />
    </>
  );
}
