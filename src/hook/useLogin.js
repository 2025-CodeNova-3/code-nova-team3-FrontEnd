// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Login from "../apis/login";
// export function useLogin() {
//   const navigate = useNavigate();

//   const navigateToLoginSuccess = () => {
//     navigate("/");
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     if (email == "" || password == "") {
//       alert("email과 password를 입력해주세요.");
//       return;
//     }
//     try {
//       const result = await Login(email, password);
//       if (result) {
//         sessionStorage.setItem("isLogin", true);
//         sessionStorage.setItem("userId", result.data.userId);
//         navigateToLoginSuccess();
//       } else {
//         alert("회원가입을 하셔야합니다.");
//       }
//     } catch (error) {
//       console.error("로그인 중 오류 발생:", error);
//     }
//   };
//   return {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleLogin,
//   };
// }
