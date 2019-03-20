import React, { Component } from 'react';
import {connect} from "react-redux"

class List extends Component {
  
render() {

const list = this.props.list.map(todo => <p key={todo.id}>{todo.title}</p>)

    return (
        <div>{list}
        </div>
    );
}
}

const mapStateToProps = state => {
    return ({list: state.todos})
}

export default connect(mapStateToProps)(List);