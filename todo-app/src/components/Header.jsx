export function Header(props) {
    const { todos } = props;
    const todoLength = todos.length;
    const isTasksPlural = todoLength !== 1;
    const taskWord = isTasksPlural ? "tasks" : "task";
    return (
        <header>
            <h1 className="text-gradient">You have {todoLength} open {taskWord}.</h1>
        </header>
    )
}