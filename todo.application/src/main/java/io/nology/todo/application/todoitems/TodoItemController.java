package io.nology.todo.application.todoitems;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.nology.todo.application.exceptions.NotFoundException;
//import io.nology.wales.blogs.exceptions.NotFoundException;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/todoList")
public class TodoItemController {

	@Autowired
	private TodoItemService TodoItemService;

	@PostMapping
	public ResponseEntity<TodoItem> createPost(@Valid @RequestBody CreateTodoItemDTO data) {
		TodoItem createdTodoItem = this.TodoItemService.createPost(data);
		return new ResponseEntity<>(createdTodoItem, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<TodoItem>> getAllItems() {
		List<TodoItem> allTodoItems = this.TodoItemService.getAllItems();
		return new ResponseEntity<>(allTodoItems, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<TodoItem> getItemById(@PathVariable Long id) throws NotFoundException {
		Optional<TodoItem> maybeTodoItem = this.TodoItemService.findById(id);
		TodoItem foundTodoItem = maybeTodoItem.orElseThrow(() -> new NotFoundException(TodoItem.class, id));
		return new ResponseEntity<>(foundTodoItem, HttpStatus.OK);
	}

	@PatchMapping("/{id}")
	public ResponseEntity<TodoItem> updatePostById(@Valid @RequestBody UpdateTodoItemDTO data, @PathVariable Long id)
			throws NotFoundException {
		Optional<TodoItem> maybeUpdatedItem = this.TodoItemService.updateById(data, id);
		TodoItem updatedTodoItem = maybeUpdatedItem.orElseThrow(() -> new NotFoundException(TodoItem.class, id));
		return new ResponseEntity<>(updatedTodoItem, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<TodoItem> deletePostById(@PathVariable Long id) throws NotFoundException {
		boolean deleted = this.TodoItemService.deletePostById(id);
		if (!deleted) {
			throw new NotFoundException(TodoItem.class, id);
		}
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}

}
