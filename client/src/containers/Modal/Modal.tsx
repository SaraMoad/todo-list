import Button from "../../components/Button/Button";
import { TodoItem } from "../../services/todoItems";
import AddTodoForm from "../../components/todoForm/AddTodoForm";
import EditTodoForm from "../../components/todoForm/EditTodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  todoItem?: TodoItem;
  isOpen: boolean;
  setIsOpen: (value: any) => any;
  setTodoItem: (value: any) => any;
  setTodoItems: (value: any) => any;
}

const Modal = ({
  todoItem,
  setIsOpen,
  isOpen,
  setTodoItem,
  setTodoItems,
}: ModalProps) => {
  console.log(todoItem, "item");
  const onSubmit = async (data: any) => {
    await TodoItem.add(data);
  };
  const onSubmitEdit = async (data: any) => {
    console.log(data);
    console.log("clicked");
    await TodoItem.update(todoItem?.id, data).then((res) => setTodoItems(res));
    setIsOpen(false);
  };
  const onClick = () => {
    setIsOpen(false);
    setTodoItem(undefined);
  };

  return (
    <>
      {isOpen && (
        <div>
          <Button handleClick={onClick}>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
          {todoItem ? (
            <EditTodoForm submitHandler={onSubmitEdit} todoItem={todoItem} />
          ) : (
            <AddTodoForm submitHandler={onSubmit} />
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
