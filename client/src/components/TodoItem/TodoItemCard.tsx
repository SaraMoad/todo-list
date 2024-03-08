import { useState } from "react";
import { TodoItem } from "../../services/todoItems";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { priorityValue } from "../../services/priorities";
import styles from "./todoItem.module.scss";
interface TodoItemProps {
  name: string;
  description: string;
  priority: string;
  dueDate: string;
  id: string;
  setTodoItems: (res: any) => any;
  setTodoItem: (res: any) => any;
  setIsOpen: (res: any) => any;
  dispatchToast: (message: string, variant: string) => unknown;
}

const TodoItemCard = ({
  name,
  description,
  priority,
  dueDate,
  id,
  setTodoItems,
  setTodoItem,
  setIsOpen,
  dispatchToast,
}: TodoItemProps) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  const handleDelete = () => {
    TodoItem.delete(id)
      .then((res) => setTodoItems(res))
      .catch((res) => dispatchToast(res.message, "error"));
    dispatchToast("Todo Task Deleted", "success");
  };

  const handleEdit = async () => {
    await TodoItem.find(id).then((res) => setTodoItem(res));
    setIsOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__item}>
          <input
            className={styles.check}
            onClick={handleClick}
            type="checkbox"
          ></input>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.dueDate}>Due Date: {dueDate.slice(0, 10)}</p>
        </div>
        <div className={styles.header__item}>
          <p className={styles.priority}>{priorityValue[Number(priority)]}</p>
          <button className={styles.button} onClick={handleEdit}>
            <FontAwesomeIcon className={styles.icon} icon={faPencil} />
          </button>
          <button className={styles.button} onClick={handleDelete}>
            <FontAwesomeIcon className={styles.icon} icon={faTrash} />
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default TodoItemCard;
