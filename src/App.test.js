import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import essayConfigList from "./essay/index.json";

test("renders abstract section", () => {
  render(<App />, { wrapper: BrowserRouter });
  const abstractElement = screen.getByTestId("abstract");
  expect(abstractElement).toBeInTheDocument();
  expect(screen.getByTestId("home")).toBeInTheDocument();
});

test("landing on a bad page", () => {
  const badRoute = "/some/bad/route";

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/404/i)).toBeInTheDocument();
  expect(screen.getByText(/Error: Page not found/i)).toBeInTheDocument();
});

test("landing on a essay page", () => {
  const route = "/essay/001-es6-best-practices";

  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByTestId("essay")).toBeInTheDocument();
});
