import { registrationService } from "../../services/registrationService";
import { loginFailure, loginStart, loginSuccess } from "./registrationSlice";

export const loginUser = (userCredential) => async (dispatch) => {
  dispatch(loginStart());

  registrationService
    .getRegisteredUser("auth/login", userCredential)
    .then(({ data }) => dispatch(loginSuccess(data)))
    .catch(({ message }) => dispatch(loginFailure(message)));
};
