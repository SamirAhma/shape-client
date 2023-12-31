// import axios from "axios";

// // const BASE_URL = "https://shape-backend.onrender.com/api/";
// // const BASE_URL =
// //   process.env.NODE_ENV === "production"
// //     ? "https://shape-backend.onrender.com/api/"
// //     : "http://localhost:8081/api";
// const BASE_URL = "http://localhost:8081/api";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzQzNjVkYjQ5MDZiYmQzOGM2N2FiNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njg2NzYxMDAsImV4cCI6MTY2ODkzNTMwMH0.jhOjtkCzdJMqp3Fd9ErUtThTi5B2zlvVTGO8ebaDTt8";
// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   header: { token: `Bearer ${TOKEN}` },
// });

import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://shape-backend.onrender.com/api/"
    : "http://localhost:8081/api";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
