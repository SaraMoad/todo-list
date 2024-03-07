import { useEffect, useState } from "react";
import TodoList from "../../containers/TodoList/TodoList";
import { TodoItem } from "../../services/todoItems";

const HomePage = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[] | null>(null);

  useEffect(() => {
    TodoItem.getAll().then((res) => setTodoItems(res));
  }, []);
  console.log(todoItems);

  return (
    <div>
      <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
      {/* <TodoItemModal  /> */}
    </div>
  );
};

export default HomePage;
