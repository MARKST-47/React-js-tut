export function Tabs(props) {
    const { todos, selectedtab, setTab } = props;

    const tabs = ['All', 'Open', 'Completed'];
    return (
        <nav className="tab-container">
            {tabs.map((tab, index) => {
                const numofTasks = tab ==='All' ? 
                todos.length : tab === 'Open' ? 
                todos.filter(todo => !todo.completed).length : todos.filter(todo => todo.completed).length;
                return (
                    <button onClick={() => setTab(tab)}
                    key={index} className={"tab-button " + (tab === selectedtab ? " tab-selected" : " ")}>
                        <h4>{tab} <span>({numofTasks})</span></h4>
                    </button>
                )
            })}
            <hr/>
        </nav>
    )
}