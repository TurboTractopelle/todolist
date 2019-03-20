import initialState from "./initialState"
import * as actionTypes from "./actionTypes"

const reducer = (state = initialState,action)=>{

    switch(action.type){
        case actionTypes.TODO_CHANGE_TITLE:
            console.log(action)
            const newTodos = state.todos.map(todo=> todo.id === action.id ? {...todo, title: action.title} : todo )
            return (
                {...state, 
                    todos: newTodos}
                )
        default:
            return state
    }
}

export default reducer
