import React, { Component } from 'react';
import {connect} from "react-redux"
import Todo from "../../components/Todo/Todo"

class Todos extends Component {
render() {

    const todos = this.props.todos.map(item => <Todo {...item} key={item.id}/>)

    return (
        <div>
            {todos}
        </div>
    );
}
}

const mapStateToProps = (state) => {
    return ({
        todos: state.todos
    })

}


export default connect(mapStateToProps)(Todos);