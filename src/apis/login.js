import instance from "../apis/instance/index.js";
const Login = async (username, password) => {
  const datas = {
    username: username,
    password: password,
  };
  console.log(datas);

  try {
    const response = await instance.post("api/auth/sign-in", datas);
    return response.data;
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
      } else if (status === 500) {
        alert("회원가입을 하셔야 합니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    } else {
      console.error("Unexpected error:", error);
    }
    throw error; // 에러를 호출자에게 전달
  }
};
export default Login;
