import { loginStart, loginSuccess, loginFailure } from "./userRedux";
// import {
//   registerStart,
//   registerSuccess,
//   registerFailure,
// } from "./registerRedux";
import { publicRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    if (user.type === "login") {
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
    } else if (user.type === "register") {
      const res = await publicRequest.post("/auth/register", user);
      dispatch(loginSuccess(res.data));
    } else {
    }
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};
