import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Button from "@components/atoms/Button";

afterEach(cleanup);
describe("Button", () => {
  it("Button should contain child text", () => {
    const text = "테스트 텍스트";
    const { container } = render(<Button>{text}</Button>);
    expect(container).toHaveTextContent(text);
  });
});
