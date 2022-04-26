import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import Online from "../Online/Online";

describe("Test Online component", () => {
  it("check Online renders in right way", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Online user={{ username: "John" }} />, div);

    expect(div.querySelector(".rightbarUsername").textContent).toBe("John");
  });

  it("search content in the Online component", () => {
    render(<Online user={{ username: "John" }} />);
    const name = screen.getByText(/John/);

    expect(name).toBeInTheDocument();
  });
});
