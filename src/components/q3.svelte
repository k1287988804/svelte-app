<script lang="ts">
	// Partial<T>，它的作用是将某个类型里的属性全部变为可选项 ?
	interface Todo {
		title: string;
		description: string;
	}

	function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
		return { ...todo, ...fieldsToUpdate };
	}

	updateTodo({title: '111', description: 'fff'}, { title: 'bbb'})
</script>