import './Todo.css';
import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { db } from './firebase_config';

function TodoListItem({ todo, inProgress, id, timeStamp }) {

    function toggleInProgress() {
        db.collection("todoTable").doc(id).update({
            inProgress: !inProgress,
        });
    };
    
    function deleteTodo() {
        db.collection("todoTable").doc(id).delete();
    };

    return (
        <div className='todoItem'>
            <Card className='todo-card'>
                <CardContent style={{padding: '15px 15px', display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between'}}>
                    <div>
                        <Typography style={{ textDecoration: inProgress ? 'none' : 'line-through', fontWeight: 'bold', color: 'white', fontSize: '16px', fontFamily: "'JetBrains Mono', monospace"}} className="ow" variant="h5" component="h2">
                        {todo}
                        </Typography>
                        <Typography style={{color: 'white', fontSize: '14px', fontFamily: "'JetBrains Mono', monospace"}} variant="body2" component="p">
                            {inProgress ? "In Progress" : "Completed"}
                        <br />
                        </Typography>
                    </div>
                    <div>
                        <button onClick={toggleInProgress} style={{fontSize: '14px', padding: '8px', borderRadius: '6px', marginRight: '12px'}} type="submit" class="done-button">{inProgress ? "Done" : "Undone"}</button>
                        <button onClick={deleteTodo} style={{fontSize: '14px', padding: '8px 14px', borderRadius: '6px'}} type="submit" class="done-button">X</button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default TodoListItem