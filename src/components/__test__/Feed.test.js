import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Feed from "../Feed/Feed";
import { createReduxStore } from "../../store";

jest.mock("react-redux");

describe.skip("Test Feed component", () => {
  it("Test skeletons placeholders", () => {
    // useSelector.mockResolvedValueOnce({ user: { _id: 1 } });
    // TODO Error nothing was returned from the render

    const component = render(
      <Provider
        store={createReduxStore({
          registration: {
            user: {
              _id: 1,
            },
          },
        })}
      >
        <Feed username="John" />
      </Provider>
    );
  });
});
