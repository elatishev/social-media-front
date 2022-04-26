import React from "react";
import { render, screen } from "@testing-library/react";
import PrimaryButton from "../Buttons/PrimaryButton";

describe("Test PrimaryButton component", () => {
  it("PrimaryButton component renders fine", () => {
    render(<PrimaryButton />);
    const btn = screen.getByRole("button");
    const span = btn.querySelector("span");

    expect(btn).toBeInTheDocument();
    expect(btn).toMatchSnapshot();
    expect(span).toHaveClass("MuiButton-label");
  });
});
