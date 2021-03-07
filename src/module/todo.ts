export interface TodoItemDataParams{
    id:number;
    text:string;
    isChecked:boolean;
}

interface TodoState{
    todoItems:TodoItemDataParams[];
}

const CREATE="todo/CREATE";
const REMOVE="todo/REMOVE";
const TOGGLE="todo/TOGGLE";

interface CreateAction{
    type:typeof CREATE;
    payload:TodoItemDataParams;
}
interface RemoveAction{
    type:typeof REMOVE;
    meta:{
        id:number
    }
}
interface ToggleAction{
    type:typeof TOGGLE;
    meta:{
        id:number
    }
}


export type TodoActionTypes=
|CreateAction
|RemoveAction
|ToggleAction;
let autoId=0;


const create=(text:string)=>{
    return{
        type:CREATE,
        payload:{
            id:autoId++,
            text:text,
            isChecked:false
        }
    }
}

const remove=(id:number)=>{
    return{
        type:REMOVE,
        meta:{
            id
        }
    }
}
const toggle=(id:number)=>{
    return{
        type:TOGGLE,
        meta:{
            id
        }
    }
}

export const actionCreators={
    create,
    toggle,
    remove,
}


const initalState:TodoState={
    todoItems:[],
}

 const todoReducer=(state=initalState,action:TodoActionTypes):TodoState=>{
    switch(action.type){
        case CREATE:
            return{
                todoItems:[...state.todoItems,action.payload]
            }
        case REMOVE:
            return{
                ...state,
                todoItems:state.todoItems.filter(todo=>todo.id!==action.meta.id)
            }
        case TOGGLE:
            return{
                ...state,
                todoItems:state.todoItems.map(todo=>{if(todo.id===action.meta.id){todo.isChecked=!todo.isChecked}return todo;})
            }
        default: return state
    }
}

export default todoReducer