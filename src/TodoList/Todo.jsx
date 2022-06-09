export default function Todo ({todo, index, completeTodo, removeTodo}){

    return(
        <div
            className="todo"
            style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
            {todo.text}
            <div>
                <button onclick={() => completeTodo(index)}>Completar</button>
                <button onclick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    )
}