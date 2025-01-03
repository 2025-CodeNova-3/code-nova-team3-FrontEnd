import instance from "./instance";

const Logout = async (accessToken, refreshToken) => {
  try {
    const response = await instance.post(
      "api/auth/sign-out",
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Cookie: `refresh=${refreshToken}`,
        },
      }
    );
    alert(response.data.message || "로그아웃 성공");
    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      const { code, message } = error.response.data;
      switch (code) {
        case 3001:
          alert("Authorization 헤더가 설정되지 않았습니다.");
          break;
        case 3002:
          alert("엑세스 토큰이 만료되었습니다.");
          break;
        case 3003:
          alert("엑세스 토큰 타입이 일치하지 않습니다.");
          break;
        case 3004:
        case 3005:
          alert("리프레시 토큰이 누락되었습니다.");
          break;
        case 3006:
          alert("리프레시 토큰이 만료되었습니다.");
          break;
        case 3007:
          alert("리프레시 토큰 타입이 일치하지 않습니다.");
          break;
        case 3008:
          alert("미등록 리프레시 토큰입니다.");
          break;
        default:
          alert(message || "알 수 없는 오류가 발생했습니다.");
      }
    } else {
      alert("잠시 후 다시 시도해주세요.");
    }
    throw error;
  }
};

export default Logout;
