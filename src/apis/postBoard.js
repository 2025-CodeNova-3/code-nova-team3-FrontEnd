import instance from "./instance";

const postBoard = async (requestData) => {
  const token = sessionStorage.getItem("accessToken");

  if (!token) {
    alert("로그인이 필요합니다.");
    throw new Error("No token found");
  }

  try {
    // 서버로 POST 요청 보내기
    const response = await instance.post(
      `/api/boards`,
      requestData, // 요청 데이터
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("게시글 등록 성공:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("서버 응답 오류:", error.response);
      if (error.response.status === 401) {
        alert("잘못된 요청입니다.");
      } else if (error.response.status === 500) {
        alert("게시글을 등록할 수 없습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    }
    throw error;
  }
};

export default postBoard;
