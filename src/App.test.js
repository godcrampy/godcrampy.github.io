import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders abstract section", () => {
  render(<App />);
  const abstractElement = screen.getByTestId("abstract");
  expect(abstractElement).toBeInTheDocument();
});
