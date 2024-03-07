package io.nology.todo.application.todoitems;


import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class TodoItemService {

	@Autowired
	private TodoItemRepository repo;

	@Autowired
	private ModelMapper mapper;

	public TodoItem createPost(CreateTodoItemDTO data) {

		TodoItem newTodoItem = mapper.map(data, TodoItem.class);
		newTodoItem.setCreatedAt(new Date());
		return this.repo.save(newTodoItem);

	}

	public List<TodoItem> getAllItems() {
		return this.repo.findAll();

	}

	public Optional<TodoItem> findById(Long id) {
		return this.repo.findById(id);

	}

	public Optional<TodoItem> updateById(@Valid UpdateTodoItemDTO data, Long id) {
		Optional<TodoItem> maybeItem = this.findById(id);
		if (maybeItem.isEmpty()) {
			return maybeItem;
		}
		TodoItem foundItem = maybeItem.get();
		mapper.map(data, foundItem);
		TodoItem updated = this.repo.save(foundItem);
		return Optional.of(updated);
	}

	public boolean deletePostById(Long id) {
		Optional<TodoItem> maybeItem = this.repo.findById(id);
		if (maybeItem.isEmpty()) {
			return false;
		}
		this.repo.delete(maybeItem.get());
		return true;
	}

}
