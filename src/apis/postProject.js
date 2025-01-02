import instance from "./instance";

const PostProject = async (projects) => {
  console.log("post project 들어옴");
  console.log(projects.projectName);
  const requestData = projects.map((project) => {
    // projectDate에서 시작 및 종료 날짜를 안전하게 가져오기
    const startDate =
      project.projectDate && project.projectDate[0] instanceof Date
        ? project.projectDate[0].toISOString()
        : "2024-10-08T00:00:00";

    const endDate =
      project.projectDate && project.projectDate[1] instanceof Date
        ? project.projectDate[1].toISOString()
        : "2024-10-10T00:00:00";

    return {
      projectName: project.projectName,
      // image: project.projectPhoto, // 이미지 URL로 변환 필요
      image: "Photo", //
      projectDesc: project.projectDescLine,
      projectFullDesc: project.projectDesc,
      projectLink: project.projectLink,
      startDate: startDate,
      endDate: endDate,
      roles: project.category,
      pns: project.problems.map((problem) => ({
        problem: problem.problem,
        solution: problem.solution,
      })),
    };
  });

  try {
    const responses = await Promise.all(
      requestData.map((data) => instance.post("api/projects", data))
    );
    const projectIds = responses.map((response) => response.data.projectId);
    return projectIds;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        alert("잘못된 요청입니다.");
      } else if (error.response.status === 500) {
        alert("Project를 생성할 수 없습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    }
    throw error;
  }
};

export default PostProject;
