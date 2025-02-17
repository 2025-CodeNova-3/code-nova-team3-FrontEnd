import instance from "./instance";

const PostSignUp = async (request) => {
  try {
    // POST 요청
    const response = await instance.post(`/api/auth/sign-up`, request);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(error.response);
      if (error.response.status === 401) {
        alert("잘못된 요청입니다.");
      } else if (error.response.status === 500) {
        alert("회원가입을 할 수 없습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    }
    throw error;
  }
};

export default PostSignUp;
