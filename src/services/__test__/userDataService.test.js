import axios from "axios";
import { userDataService } from "../userDataService";

jest.mock("axios");

describe("API call is successful", () => {
  let response = null;

  beforeEach(() => {
    response = {
      data: {
        _id: "61d9d847c97cb8bdc4691674",
        username: "AlenaBfit",
        email: "AlenaBfit@gmail.com",
        profilePicture: "",
        coverPicture: "",
        followers: ["61de9ae792d7aa5da2105351"],
        followings: ["61de9ae792d7aa5da2105351"],
        isAdmin: false,
        createdAt: "2022-01-08T18:30:31.666Z",
        __v: 0,
      },
      status: "ok",
    };
  });

  afterEach(() => {
    response = null;
  });

  it("getDataService returned value", async () => {
    axios.get.mockResolvedValueOnce(response);
    const data = await userDataService.getUserData("61d9d847c97cb8bdc4691674");

    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/users?username=61d9d847c97cb8bdc4691674");
    expect(data).toEqual({
      _id: "61d9d847c97cb8bdc4691674",
      username: "AlenaBfit",
      email: "AlenaBfit@gmail.com",
      profilePicture: "",
      coverPicture: "",
      followers: ["61de9ae792d7aa5da2105351"],
      followings: ["61de9ae792d7aa5da2105351"],
      isAdmin: false,
      createdAt: "2022-01-08T18:30:31.666Z",
      __v: 0,
    });
    expect(data).toMatchSnapshot();
  });
});
