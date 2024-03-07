import TodoItemCard from "../../components/TodoItem/TodoItemCard";
import { TodoItem } from "../../services/todoItems";

interface TodoListProps {
  todoItems: TodoItem[] | null;
  setTodoItems: (res: any) => any;
}
const TodoList = ({ todoItems, setTodoItems }: TodoListProps) => {
  return todoItems?.map((item: TodoItem) => {
    return (
      <TodoItemCard
        key={item.id}
        name={item.name}
        description={item.description}
        priority={item.priority}
        dueDate={item.dueDate}
        id={item.id}
        setTodoItems={setTodoItems}
      />
    );
  });
};

export default TodoList;
