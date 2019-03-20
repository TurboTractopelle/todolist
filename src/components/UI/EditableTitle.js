import React, { Component } from 'react';
import {connect} from "react-redux"
import * as actions from "../../store/actions"


class EditableTitle extends Component {

state={editing:false, initialValue: this.props.title, currentTitle: this.props.title}

switchEditorHandler = () => {
    this.setState(prevState => ({editing: !prevState.editing}))

    if(this.state.editing && (this.state.initialValue !== this.state.currentTitle) ){
        this.props.todo_change_title(this.props.id, this.state.currentTitle)
    }
}

inputHandler = (e)=>{
    const value = e.target.value
    this.setState({currentTitle:value})
}



render() {
    return (
        <div className="EditableTitle">
            {this.state.editing ? 
                <input type="text" value={this.state.currentTitle} onChange={this.inputHandler}></input> :
                <h2>{this.props.title}</h2>                    
            }
            <span onClick={this.switchEditorHandler} className="edit">
                {this.state.editing ? "ok" : "edit"}
            </span>
        </div>
    );
}
}

const MapDispatchToProps = (dispatch) => {

    return({
        todo_change_title : (id, title) => dispatch(actions.todo_change_title(id, title))
    })

}

export default connect(null,MapDispatchToProps)(EditableTitle);