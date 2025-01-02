import instance from "./instance";

const PutTemplate = async (templateId) => {
  const requestData = {
    templateId: templateId,
  };

  console.log("Portfolio PUT Request Body", requestData);

  try {
    const portfolioId = sessionStorage.getItem("portfolioId");
    const response = await instance.put(
      `api/portfolio/template/${portfolioId}`,
      requestData
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        alert("잘못된 요청입니다.");
      } else if (error.response.status === 500) {
        alert("Portfolio를 업데이트할 수 없습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    }
    throw error;
  }
};

export default PutTemplate;
