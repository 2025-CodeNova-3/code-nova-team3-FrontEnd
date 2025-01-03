import instance from "./instance";

const PostComments = async ({ boardId, content }) => {
  const token = sessionStorage.getItem("accessToken");

  if (!token) {
    alert("로그인이 필요합니다.");
    throw new Error("No token found");
  }

  try {
    // POST 요청
    const response = await instance.post(
      `/api/comments/boards/${boardId}`,
      {
        content: content,
        beforeOpen: true, // 항상 true로 설정
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response);
      if (error.response.status === 401) {
        alert("잘못된 요청입니다.");
      } else if (error.response.status === 500) {
        alert("댓글을 저장할 수 없습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    }
    throw error;
  }
};

export default PostComments;
