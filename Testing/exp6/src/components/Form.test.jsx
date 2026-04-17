import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import App from "../App";

describe("Form Testing", () => {

  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("renders input field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/enter name/i)).toBeInTheDocument();
  });

  it("shows alert when empty", () => {
    render(<App />);
    fireEvent.click(screen.getByText(/submit/i));
    expect(window.alert).toHaveBeenCalledWith("Name required");
  });

  it("submits valid input", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    render(<App />);

    fireEvent.change(screen.getByPlaceholderText(/enter name/i), {
      target: { value: "Aditya" },
    });

    fireEvent.click(screen.getByText(/submit/i));

    expect(global.fetch).toHaveBeenCalled();
  });
});