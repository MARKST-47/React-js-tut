import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, tab } = props;
    const filteredTodos = tab === 'All' ? todos :
        tab === 'Open' ? todos.filter(todo => !todo.completed) :
        todos.filter(todo => todo.completed);
    return (
        <>
            {filteredTodos.map((todo, index) => {
                return (
                    <TodoCard
                        key={index}
                        todoIndex={todos.findIndex(t => t === todo)}
                        {...props}
                        todo={todo}
                    />
                )
            })}
        </>
    )
}