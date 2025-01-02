import instance from "./instance";
const GetSurvey = async (surveyId) => {
  try {
    const response = await instance.get(`api/survey/${surveyId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        alert("잘못된 요청입니다.");
      } else if (error.response.status === 500) {
        alert("survey를 가져올 수 없습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    }
    throw error;
  }
};
export default GetSurvey;
