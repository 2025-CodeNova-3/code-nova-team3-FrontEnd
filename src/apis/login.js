import instance from "./instance";

const Login = async (email, password) => {
  const datas = {
    email,
    password,
  };

  try {
    return await instance.post("api/auth/login", datas);
  } catch (error) {
    if (error.response.status === 401) {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    } else if (error.response.status === 500) {
      alert("회원가입을 하셔야해.");
    } else {
      alert("잠시 후 다시 시도해주세요.");
    }
    reject(error);
  }
};

export default Login;
