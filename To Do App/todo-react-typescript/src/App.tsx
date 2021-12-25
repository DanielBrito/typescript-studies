import React, {useState} from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Array<Todo> = [
    {text: "Study TypeScript", complete: true},
    {text: "Study internship stuff", complete: false}
]

const App: React.FunctionComponent = () => {

    const [todos, setTodos] = useState(initialTodos)

    const toggleTodo: ToggleTodo = (selectedTodo) => {
        const newTodos = todos.map(todo => {
            if(todo===selectedTodo){
                return{
                    ...todo,
                    complete: !todo.complete
                }
            }
            return todo
        })

        setTodos(newTodos)
    }

    const addTodo: AddTodo = newTodo => {
        if(newTodo.trim()===""){
            alert('Type something to do')
        }
        else{
            setTodos([...todos, {text: newTodo, complete: false}])
        }
    }

    return (
        <div className="App">
            <React.Fragment>
                <AddTodoForm addTodo={addTodo}/>
                <TodoList todos={todos} toggleTodo={toggleTodo}></TodoList>
            </React.Fragment>
        </div>
    );
}

export default App;
