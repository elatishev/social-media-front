import axios from "axios";

export const userDataService = {
  getUserData: (username) => axios.get(`/users?username=${username}`).then(({ data }) => data),
};
