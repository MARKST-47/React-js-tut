import { useState } from "react";

export function TodoCard(props) {
    const { todo, deleteTodo, todoIndex, completeTodo, editTodo } =  props;
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    function handleEditSave() {
        editTodo(todoIndex, editText);
        setIsEditing(false);
    }

    return (
        <div className="card todo-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editText}
                        onChange={e => setEditText(e.target.value)}
                    />
                    <button onClick={handleEditSave}><h6>Save</h6></button>
                    <button onClick={() => setIsEditing(false)}><h6>Cancel</h6></button>
                </>
            ) : (
                <>
                    <p>{todo.text}</p>
                    <div className="todo-buttons">
                        <button onClick={() => {completeTodo(todoIndex)}} disabled={todo.completed}>
                            <h6>Done</h6>
                        </button>
                        <button onClick={() => deleteTodo(todoIndex)}>
                            <h6>Delete</h6>
                        </button>
                        <button onClick={() => setIsEditing(true)}>
                            <h6>Edit</h6>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}