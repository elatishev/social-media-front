import * as axios from "axios";

export const registrationService = {
  getRegisteredUser: (url, userCredential) => axios.post(url, userCredential),
};
