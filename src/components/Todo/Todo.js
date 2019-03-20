import React from 'react';
import EditableTitle from "../UI/EditableTitle"
import Button from "../UI/Button"
import * as actionTypes from "../../store/actionTypes"

const Todo =(props)=> {

    const statusClass = props.done ? "done" : "running"

return (
        <div className={["todo", statusClass].join(" ")}>
            <h2><EditableTitle title={props.title} id={props.id} /></h2>
            <div className="text">{props.text}</div>
            {props.done ? null : <Button text="Set as DONE" action={actionTypes.TODO_SET_DONE} id={props.id} /> }
        </div>
    );
}

export default Todo;