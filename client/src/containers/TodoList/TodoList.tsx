import { useState } from "react";
import TodoItemCard from "../../components/TodoItem/TodoItemCard";
import { TodoItem } from "../../services/todoItems";
import Modal from "../Modal/Modal";

interface TodoListProps {
  todoItems: TodoItem[] | null;
  setTodoItems: (res: any) => any;
}
const TodoList = ({ todoItems, setTodoItems }: TodoListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [todoItem, setTodoItem] = useState<TodoItem | undefined>(undefined);
  return (
    <>
      {todoItems &&
        todoItems?.map((item: TodoItem) => {
          return (
            <TodoItemCard
              key={item.id}
              name={item.name}
              description={item.description}
              priority={item.priority}
              dueDate={item.dueDate}
              id={item.id}
              setTodoItems={setTodoItems}
              setIsOpen={setIsOpen}
              setTodoItem={setTodoItem}
            />
          );
        })}

      {isOpen && (
        <Modal
          todoItem={todoItem}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setTodoItem={setTodoItem}
          setTodoItems={setTodoItems}
        />
      )}
    </>
  );
};

export default TodoList;
