import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./registrationSlice";

export const loginUser = (userCredential) => async (dispatch, getState) => {
  dispatch(loginStart());
  try {
    const response = await axios.post("auth/login", userCredential);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
