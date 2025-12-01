import { render, screen } from "@testing-library/react";
import App from "./App";

// Basic smoke test — ensures App renders without crashing
test("renders portfolio app without errors", () => {
  render(<App />);
  
  // Verify important sections render
  const heroElement = screen.getByRole("heading", { level: 1, hidden: true });
  expect(heroElement).toBeInTheDocument();
});
