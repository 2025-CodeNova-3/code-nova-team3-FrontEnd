import React, { useState } from "react";
import MainImg from "../../assets/icons/main.svg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Contents from "../../components/Contents/Contents";
import { Img } from "./Main.styles";
import Comments from "../../components/Comments/Comments";
import Button from "../../components/Button/Button";
import LoginPopup from "../../components/LoginPopup/LoginPopup";

export default function Main({ login, setLogin }) {
  const [onModal, setOnModal] = useState(false); // 모달 상태 관리

  return (
    <>
      {onModal && (
        <LoginPopup
          setOnModal={setOnModal}
          login={login}
          setLogin={setLogin} // ✅ 수정: setLogin 전달
        />
      )}

      <Button />
      <Header setOnModal={setOnModal} login={login} setLogin={setLogin} />
      <Img>
        <img src={MainImg} alt="main img" />
      </Img>
      <Contents />
      <Footer />
      <Comments />
    </>
  );
}
