package io.nology.todo.application.todoitems;

import java.util.Date;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateTodoItemDTO {

		@NotBlank
		private String name;

		@NotBlank
		private String description;

		@NotNull
		private Date dueDate;
		
		@NotNull
		private int priority;

		public String getName() {
			return name;
		}

		public String getDescription() {
			return description;
		}

		public Date getDueDate() {
			return dueDate;
		}

		public int getPriority() {
			return priority;
		}

		@Override
		public String toString() {
			return "CreateTodoItemDTO [name=" + name + ", description=" + description + ", dueDate=" + dueDate
					+ ", Priority=" + priority + "]";
		}
		


}
