const ToDo = ({status, title, id, toggleTodo}) => {
  console.log(toggleTodo);
  const handleOnChange = () =>{
    toggleTodo(id);
  }

    return(
        <li>
        <label htmlFor={id}>
        <input id={id} type="checkbox"  checked={status} onChange={handleOnChange} />
        <span >{title}</span>
        </label>
      </li>
    )
}
export default ToDo;