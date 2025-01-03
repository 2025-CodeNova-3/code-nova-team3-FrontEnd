import instance from "./instance";
const GetPaged = async (category = "BRAND", currentPage) => {
  const token = sessionStorage.getItem("accessToken");

  if (!token) {
    alert("로그인이 필요합니다.");
    throw new Error("No token found");
  }

  try {
    const response = await instance.get(
      `api/boards/paged?boardCategory=${category}&page=${
        currentPage - 1
      }&size=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      if (error.response.status === 401) {
        alert("잘못된 요청입니다.");
      } else if (error.response.status === 500) {
        alert("posts를 가져올 수 없습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    }
    throw error;
  }
};

export default GetPaged;
