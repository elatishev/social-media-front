import { selectIsUserRegistered, selectRegisteredUser } from "../registrationSelectors";

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

describe("selectRegisteredUser", () => {
  it("work with empty state", () => {
    expect(
      selectRegisteredUser({
        registration: {
          user: undefined,
        },
      })
    ).toBe(undefined);
  });

  it("work with initial state", () => {
    expect(
      selectRegisteredUser({
        registration: {
          user: null,
          isFetching: false,
          error: false,
        },
      })
    ).toBe(null);
  });
});
