import initialState from "./initialState"
import * as actionTypes from "./actionTypes"

const reducer = (state = initialState,action)=>{

    switch(action.type){
        case actionTypes.TODO_CHANGE_TITLE:
            console.log(action)
            let newTodos = state.todos.map(todo=> todo.id === action.id ? {...todo, title: action.title} : todo )
            return (
                {...state, 
                    todos: newTodos}
                )
        case actionTypes.TODO_SET_DONE:
            console.log(action)
            let newTodosDone = state.todos.map(todo=> todo.id === action.id ? {...todo, done: true } : todo )
            return(
                {...state, todos: newTodosDone}
            )
        default:
            return state
    }
}

export default reducer
