import instance from "./instance";
const GetPost = async (boardId) => {
  const token = sessionStorage.getItem("accessToken");

  if (!token) {
    alert("로그인이 필요합니다.");
    throw new Error("No token found");
  }
  try {
    const response = await instance.get(`api/boards/${boardId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      if (error.response.status === 401) {
        alert("잘못된 요청입니다.");
      } else if (error.response.status === 500) {
        alert("board를 가져올 수 없습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    }
    throw error;
  }
};
export default GetPost;
