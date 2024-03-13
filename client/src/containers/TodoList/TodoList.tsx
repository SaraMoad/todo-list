import TodoItemCard from "../../components/TodoItem/TodoItemCard";
import { TodoItem } from "../../services/todoItems";
import styles from "./TodoList.module.scss";

interface TodoListProps {
  todoItems: TodoItem[] | null;
  setTodoItems: (res: any) => any;
  setTodoItem: (res: any) => any;
  setIsOpen: (value: boolean) => unknown;
  dispatchToast: (message: string, variant: string) => any;
}
const TodoList = ({
  todoItems,
  setTodoItems,
  setTodoItem,
  setIsOpen,
  dispatchToast,
}: TodoListProps) => {
  return (
    <div className={styles.container}>
      {todoItems &&
        todoItems?.map((item: TodoItem) => {
          return (
            <div className={styles.card__container}>
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
                dispatchToast={dispatchToast}
              />
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
