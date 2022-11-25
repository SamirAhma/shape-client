import axios from "axios";

const BASE_URL = "https://shape-123.herokuapp.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzQzNjVkYjQ5MDZiYmQzOGM2N2FiNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njg2NzYxMDAsImV4cCI6MTY2ODkzNTMwMH0.jhOjtkCzdJMqp3Fd9ErUtThTi5B2zlvVTGO8ebaDTt8";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
