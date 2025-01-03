import axios from "axios";

const instance = axios.create({
  // baseURL: "http://43.203.51.237:8080/", // 배포용
  baseURL: "http://localhost:8080/",
  timeout: 10000,
});

export default instance;
