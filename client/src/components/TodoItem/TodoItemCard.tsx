import { useState } from "react";
import Button from "../Button/Button";
import { TodoItem } from "../../services/todoItems";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TodoItemProps {
  name: string;
  description: string;
  priority: string;
  dueDate: string;
  id: string;
  setTodoItems: (res: any) => any;
}

const priorityValue = [
  "Urgent",
  "High Priority",
  "Mid Priority",
  "Low Priority",
];

const TodoItemCard = ({
  name,
  description,
  priority,
  dueDate,
  id,
  setTodoItems,
}: TodoItemProps) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    checked ? setChecked(false) : setChecked(true);
  };

  const handleDelete = () => {
    TodoItem.delete(id).then((res) => setTodoItems(res));
  };

  const handleEdit = () => {
    console.log("edit");
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
