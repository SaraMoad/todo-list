import { render } from "@testing-library/react";
import HomePage from "./HomePage";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { TodoItem } from "../../services/todoItems";

const renderHomePage = (): any => {
  return render(<HomePage />);
};

describe("Homepage", () => {
  test("Homepage renders components", async () => {
    const rendered = await renderHomePage();
    const addButton = rendered.getByText("Add Task");
    const spyGetTodoItems = vi.spyOn(TodoItem, "getAll");
    spyGetTodoItems.mockResolvedValue([]);
    const deleteButton = rendered.getByTestId("deleteButton");
    expect(TodoItem.getAll()).resolves.toBeInstanceOf(Array);
    expect(addButton).toBeInTheDocument();
    expect(deleteButton);
  });

  test("Adding a cohort", async () => {});

  test("Deleting a cohort", async () => {});

  test("editing a cohort", async () => {});
});
