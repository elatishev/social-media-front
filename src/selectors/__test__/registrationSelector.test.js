import { selectIsUserRegistered } from "../";

describe("selectIsUserRegistered", () => {
  it("work with empty state", () => {
    expect(selectIsUserRegistered({})).toBe(undefined);
  });

  it("work with initial state", () => {
    expect(
      selectIsUserRegistered({
        registration: {
          user: null,
          isFetching: false,
          error: false,
        },
      }).user
    ).toBe(null);
  });

  it("work with filled state", () => {
    expect(
      selectIsUserRegistered({
        registration: {
          user: {
            test: "test",
          },
          isFetching: false,
          error: false,
        },
      }).user
    ).toEqual({
      test: "test",
    });
  });
});
