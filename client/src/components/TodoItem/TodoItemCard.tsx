import { useState } from "react";
import Button from "../Button/Button";
import { TodoItem } from "../../services/todoItems";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { priorityValue } from "../../services/priorities";
interface TodoItemProps {
  name: string;
  description: string;
  priority: string;
  dueDate: string;
  id: string;
  setTodoItems: (res: any) => any;
  setTodoItem: (res: any) => any;
  setIsOpen: (res: any) => any;
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
}: TodoItemProps) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  const handleDelete = () => {
    TodoItem.delete(id).then((res) => setTodoItems(res));
  };

  const handleEdit = async () => {
    await TodoItem.find(id).then((res) => setTodoItem(res));
    setIsOpen(true);
  };

  return (
    <div>
      <input onClick={handleClick} type="checkbox"></input>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{priorityValue[Number(priority)]}</p>
      <p>Due Date: {dueDate.slice(0, 10)}</p>
      <Button handleClick={handleEdit}>
        <FontAwesomeIcon icon={faPencil} />
      </Button>
      <Button handleClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </div>
  );
};

export default TodoItemCard;
