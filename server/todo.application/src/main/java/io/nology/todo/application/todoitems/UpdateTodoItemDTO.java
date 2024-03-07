package io.nology.todo.application.todoitems;

import java.util.Date;

import jakarta.validation.constraints.Pattern;

public class UpdateTodoItemDTO {

		@Pattern(regexp = "^(?=\\S).*$", message = "Name Cannot be empty")
		private String name;

		@Pattern(regexp = "^(?=\\S).*$", message = "Description Cannot be empty")
		private String description;

		private Date dueDate;
		

		private int priority;

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public Date getDueDate() {
			return dueDate;
		}

		public void setDueDate(Date dueDate) {
			this.dueDate = dueDate;
		}

		public int getPriority() {
			return priority;
		}

		public void setPriority(int priority) {
			this.priority = priority;
		}

		
	}
