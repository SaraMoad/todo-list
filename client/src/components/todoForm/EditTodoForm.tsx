import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./TodoForm.module.scss";
import { TodoItem } from "../../services/todoItems";

interface AddTodoFormProps {
  submitHandler: (data: any) => any;
  todoItem: TodoItem;
}

const EditTodoForm = ({ submitHandler, todoItem }: AddTodoFormProps) => {
  // console.log(todoItem, todoItem.id);
  console.log(typeof todoItem.dueDate, todoItem.dueDate);
  const schema = z.object({
    name: z.string().min(1, "Title must be at least 1 character long"),
    description: z.string(),
    dueDate: z.string(),
    priority: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: todoItem.name,
      description: todoItem.description,
      dueDate: todoItem.dueDate.slice(0, 22),
      priority: String(todoItem.priority),
    },
  });

  console.log(errors, "errors");

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="name">Task Name: </label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && (
          <p className={styles.error}>{errors.name.message?.toString()}</p>
        )}
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" {...register("description")} />
        {errors.description && (
          <p className={styles.error}>
            {errors.description.message?.toString()}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="dueDate">Due Date </label>
        <input type="datetime-local" id="dueDate" {...register("dueDate")} />
        {errors.dueDate && (
          <p className={styles.error}>{errors.dueDate?.message?.toString()}</p>
        )}
      </div>
      <div>
        <label htmlFor="priority">Priority: </label>
        <select id="priority" {...register("priority")}>
          <option value="0">Urgent</option>
          <option value="1">High Priority</option>
          <option value="2">Mid Priority</option>
          <option value="3">Low Priority</option>
        </select>
        {errors.priority && (
          <p className={styles.error}>{errors.priority.message?.toString()}</p>
        )}
      </div>
      <button type="submit">Edit Task</button>
    </form>
  );
};

export default EditTodoForm;
