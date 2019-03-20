import React from 'react';
import EditableTitle from "../UI/EditableTitle"

const Todo =(props)=> {
return (
        <div className="todo">
            <h2><EditableTitle title={props.title} id={props.id} /></h2>
            <div className="text">texte</div>
        </div>
    );
}

export default Todo;