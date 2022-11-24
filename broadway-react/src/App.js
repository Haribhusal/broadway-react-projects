import React, {useRef, useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import ToDos from './components/ToDos';

function App() {
  const STORAGE_NAME = 'mytodoitems';



  const [todoitems, setToDoItems] = useState([]);

  const inputRef = useRef();

  useEffect(()=>{

    const storedTodos = JSON.parse(localStorage.getItem(STORAGE_NAME));
    setToDoItems(storedTodos);
  }, [])


  useEffect(()=>{
    localStorage.setItem(STORAGE_NAME,JSON.stringify(todoitems) )
  }, [todoitems])



  const handleAddTodo = () => {
   let addedToDoTitle = inputRef.current.value;
    if(addedToDoTitle == '') return;
    setToDoItems( previousTodos => {
      return [...previousTodos, 
        {
          id: uuidv4(),
          title: addedToDoTitle,
          completed: false

        }
      ]
    } )
    inputRef.current.value = '';

  }
 


  function toggleTodo(id) {
    const newTodos = [...todoitems];
    
    const todo = newTodos.find(todo => todo.id === id)

    // todo.status = !todo.status
    
    setToDoItems(newTodos)
  }


  return (
    <main>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
            <div className="appContainer">
              <div className="appTitle">
                <h3>My Todo App</h3>
              </div>
              <ToDos todoitems={todoitems} toggleTodo={toggleTodo} />
              <div className="userInput">
                <input  ref={inputRef} type="text" placeholder='Enter Todo Item' />
                <button onClick={handleAddTodo}>Add Todo</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
