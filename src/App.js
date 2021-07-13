import './App.css';
// import { TextField, Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { db } from './firebase_config';
import firebase from 'firebase';
import TodoListItem from "./Todo";

function App() {

    const [ todoList, setTodoList ] = useState([]);

    const [ todoInput, setTodoInput ] = useState('');

    useEffect(() => {
        getTodo();
    }, []) //! blank to run only on first load

    function getTodo() {
        db.collection('todoTable').onSnapshot(function (querySnapshot) {
            setTodoList(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    todo: doc.data().todo,
                    inProgress: doc.data().inProgress,
                    timeStamp: doc.data().timeStamp,
                }))
            );
        });
    };

    function addTodo(e) {
        e.preventDefault();
        
        db.collection('todoTable').add({
            inProgress: true,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            todo: todoInput,
        });
        setTodoInput('');
    };

    return (
        <div className="App" style={{marginTop: '10vh'}}>
            <div className="container">
                    <div className="mainBox">
                        <h1 className="center heading"> Hussein Motiwala Todo App </h1>
                        <form className="center" style={{marginTop: '5vh', marginBottom: '3vh'}}>
                            <input className="textField" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} placeholder="Add a Todo"></input>
                            <button type="submit" onClick={addTodo} class="todo-button">Add todo</button>
                        </form>
                        <div className="todoMain">
                            {todoList.map((todo) => (
                                <TodoListItem todo={todo.todo} inProgress={todo.inProgress} id={todo.id} timeStamp={todo.timeStamp} />
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default App;
// <small>{todo.timeStamp.toDate().toString().slice(0, 21)}</small>

/* style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} */

/*
<TextField className="textField" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} id="outlined-basic" label="Todo" variant="outlined" style={{ maxWidth: '300px', width: '90vw' }} />
*/