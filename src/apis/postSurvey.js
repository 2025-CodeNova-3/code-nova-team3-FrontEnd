import instance from "./instance";
const PostSurvey = async (surveyData, projectIds) => {
  const requestData = {
    name: surveyData.name,
    introduce: surveyData.introduction,
    profile: "photo", // 실제 이미지 URL로 대체 필요
    projectsId: projectIds,
  };

  console.log("PostSurvey 요청 데이터:", requestData); // 디버깅용 로그

  try {
    const response = await instance.post("api/survey", requestData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("서버 응답 오류:", error.response.data); // 서버의 오류 메시지 로그
      if (error.response.status === 401) {
        alert("잘못된 요청입니다.");
      } else if (error.response.status === 500) {
        alert("Survey를 생성할 수 없습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    }
    throw error;
  }
};
export default PostSurvey;
