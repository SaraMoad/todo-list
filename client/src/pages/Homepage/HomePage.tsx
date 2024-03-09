import { useEffect, useState } from "react";
import TodoList from "../../containers/TodoList/TodoList";
import { TodoItem } from "../../services/todoItems";
import ToastNotification from "../../components/ToastNotification/ToastNotification";
import Button from "../../components/Button/Button";
import Modal from "../../containers/Modal/Modal";
import styles from "./Homepage.module.scss";

const HomePage = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[] | null>(null);
  const [isClosed, setIsClosed] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [variant, setVariant] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [todoItem, setTodoItem] = useState<TodoItem | undefined>(undefined);

  const onClick = () => {
    setIsOpen(true);
  };
  const dispatchToast = (toastMessage: string, toastVariant: string) => {
    setIsClosed(false);
    setMessage(toastMessage);
    setVariant(toastVariant);
  };

  useEffect(() => {
    TodoItem.getAll().then((res) => setTodoItems(res));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Todo Tasks</h1>
      <div className={styles.button__container}>
        <Button handleClick={onClick}>Add Task</Button>
      </div>
      <TodoList
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        setIsOpen={setIsOpen}
        setTodoItem={setTodoItem}
        dispatchToast={dispatchToast}
      />
      {isOpen && (
        <Modal
          todoItem={todoItem}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setTodoItem={setTodoItem}
          setTodoItems={setTodoItems}
          dispatchToast={dispatchToast}
        />
      )}
      {!isClosed && (
        <ToastNotification
          message={message}
          variant={variant}
          setIsClosed={setIsClosed}
          setMessage={setMessage}
          setVariant={setVariant}
        />
      )}
    </div>
  );
};

export default HomePage;
