package io.nology.todo.application.config;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.nology.todo.application.todoitems.CreateTodoItemDTO;
import io.nology.todo.application.todoitems.TodoItem;
import io.nology.todo.application.todoitems.UpdateTodoItemDTO;

@Configuration
public class ModelMapperConfig {

	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper();
		mapper.typeMap(String.class, String.class).setConverter(new StringTrimConverter());
		mapper.getConfiguration().setSkipNullEnabled(true);


		mapper.typeMap(CreateTodoItemDTO.class, TodoItem.class).addMappings(
			m -> m.using(new LowerCaseConverter()));

		mapper.typeMap(UpdateTodoItemDTO.class, TodoItem.class).addMappings(
				m -> m.using(new LowerCaseConverter()));
		return mapper;
	}

	private class StringTrimConverter implements Converter<String, String> {

		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().trim();
		}
	}

	private class LowerCaseConverter implements Converter<String, String> {

		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().toLowerCase();
		}
	}

}
