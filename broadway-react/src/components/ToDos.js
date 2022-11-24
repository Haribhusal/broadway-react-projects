import ToDo from "./ToDo";

const ToDos = ({todoitems, toggleTodo}) => {
    
    return (
        <div className="listTodos">
            <ul>
                {todoitems.map((item)=> (
                    <ToDo title={item.title} status={item.completed} key={item.id} id={item.id} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    )
}

export default ToDos;