
import * as actionTypes from "./actionTypes"

export const todo_change_title = (id, title) => ({type : actionTypes.TODO_CHANGE_TITLE, title, id})

export const todo_set_done = (id)=> ({type: actionTypes.TODO_SET_DONE, id})