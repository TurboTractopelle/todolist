import React from 'react';
import {connect} from "react-redux"
import * as actions from "../../store/actions"

const Button =(props)=> {

return (
        <div>
            <button onClick={props.todo_set_done(props.id)}>{props.text}</button>
        </div>
    );
}


const mapDispatchToProps=(dispatch)=>{
    return({
        todo_set_done : (id)=>()=>dispatch(actions.todo_set_done(id))
    })

}

export default connect(null, mapDispatchToProps)(Button);