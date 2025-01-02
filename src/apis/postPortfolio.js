import instance from "./instance";

const PostPortfolio = async (userId, surveyId, portfolioData) => {
  const requestData = {
    user_id: userId,
    survey_id: surveyId,
    title: portfolioData.portfolioTitle,
    description: "introduction",
    image: "photo",
  };

  try {
    const response = await instance.post("api/portfolio", requestData);
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        alert("잘못된 요청입니다.");
      } else if (error.response.status === 500) {
        alert("Portfolio를 생성할 수 없습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    }
    throw error;
  }
};

export default PostPortfolio;
