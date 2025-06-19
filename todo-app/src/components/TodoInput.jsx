import { useState } from "react";

export function TodoInput(props) {
    const {addTodo} = props;
    const [ inputValue, setInputValue ] = useState("");

    return (
        <div className="input-container">
            <input value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} placeholder="Add task" />
            <button onClick={() => { 
                if (!inputValue) return;
                addTodo(inputValue)
                setInputValue(""); // Clear input after adding
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}