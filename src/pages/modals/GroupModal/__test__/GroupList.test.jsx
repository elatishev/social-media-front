import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import GroupList from "../GroupList";
import { createReduxStore } from "../../../../store";

describe("Test GroupList component renders", () => {
  it("PrimaryButton component renders fine", () => {
    render(
      <Provider store={createReduxStore()}>
        <GroupList />
      </Provider>
    );
    const btn = screen.queryByRole("button");

    expect(btn).not.toBeInTheDocument();
    expect(btn).toMatchSnapshot();
  });
});
