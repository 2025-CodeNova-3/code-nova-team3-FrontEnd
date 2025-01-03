import React, { useState } from "react";
import MainImg from "../../assets/icons/main.svg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Contents from "../../components/Contents/Contents";
import { Img } from "./Main.styles";
import Button from "../../components/Button/Button";
import LoginPopup from "../../components/LoginPopup/LoginPopup";

import SignUp from "../../components/SignUp/SignUp";

export default function Main({ login, setLogin }) {
  const [onModal, setOnModal] = useState(false); // 모달 상태 관리

  const [onModal2, setOnModal2] = useState(false); // 두번째모달

  return (
    <>
      {onModal && (
        <LoginPopup
          setOnModal={setOnModal}
          setOnModal2={setOnModal2}
          login={login}
          setLogin={setLogin}
        />
      )}
      {onModal2 && <SignUp setOnModal2={setOnModal2} />}

      <Button />
      <Header setOnModal={setOnModal} login={login} setLogin={setLogin} />
      <Img>
        <img src={MainImg} alt="main img" />
      </Img>
      <Contents />
      <Footer />
    </>
  );
}
