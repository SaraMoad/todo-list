import { TodoItem } from "../../services/todoItems";
import AddTodoForm from "../../components/todoForm/AddTodoForm";
import EditTodoForm from "../../components/todoForm/EditTodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Modal.module.scss";

interface ModalProps {
  todoItem?: TodoItem;
  isOpen: boolean;
  setIsOpen: (value: any) => any;
  setTodoItem: (value: any) => any;
  setTodoItems: (value: any) => any;
  dispatchToast: (message: string, variant: string) => any;
}

const Modal = ({
  todoItem,
  setIsOpen,
  isOpen,
  setTodoItem,
  setTodoItems,
  dispatchToast,
}: ModalProps) => {
  const onSubmit = async (data: any) => {
    await TodoItem.add(data)
      .then((res) => setTodoItems(res))
      .catch((e) => dispatchToast(e.message, "error"));
    setIsOpen(false);
    dispatchToast("Todo Item Added", "success");
  };

  const onSubmitEdit = async (data: any) => {
    await TodoItem.update(todoItem?.id, data).then((res) => {
      dispatchToast("Todo Item Updated", "success"), setTodoItems(res);
    });
    setIsOpen(false);
    setTodoItem(undefined);
  };
  const onClick = () => {
    setIsOpen(false);
    setTodoItem(undefined);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.container}>
          <div className={styles.modalBox}>
            <div className={styles.button}>
              <button className={styles.button} onClick={onClick}>
                <FontAwesomeIcon className={styles.icon} icon={faXmark} />
              </button>
            </div>
            {todoItem ? (
              <div className={styles.modalContent}>
                <h3 className={styles.header}>Edit Task</h3>
                <EditTodoForm
                  submitHandler={onSubmitEdit}
                  todoItem={todoItem}
                />
              </div>
            ) : (
              <div className={styles.modalContent}>
                <h3 className={styles.header}>Add Task</h3>
                <AddTodoForm submitHandler={onSubmit} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
