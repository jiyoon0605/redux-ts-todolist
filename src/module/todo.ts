import { createAction,  PayloadAction } from "@reduxjs/toolkit";


export interface TodoItemDataParams{
    id:number;
    text:string;
    isChecked:boolean;
}

interface TodoState{
    todoItems:TodoItemDataParams[];
}


let autoId=0;



const createTodo=createAction<string>("CREATE");
const removeTodo=createAction<number>("REMOVE");
const toggleTodo=createAction<number>("TOGGLE");




export type TodoActionTypes=
|PayloadAction<string>
|PayloadAction<number>;


export const actionCreators={
    createTodo,
    toggleTodo,
    removeTodo,
}


const initalState:TodoState={
    todoItems:[],
}

 const todoReducer=(state=initalState,action:TodoActionTypes):TodoState=>{
    switch(action.type){
        case createTodo.type:
            const todoItems=state.todoItems;
            todoItems.push({
                id:autoId++,
                text:action.payload as string ,
                isChecked:false
            })
            return{
                todoItems:[...state.todoItems,]
            }
        case removeTodo.type:
            return{
                ...state,
                todoItems:state.todoItems.filter(todo=>todo.id!==action.payload)
            }
        case toggleTodo.type:
            return{
                ...state,
                todoItems:state.todoItems.map(todo=>{if(todo.id===action.payload){todo.isChecked=!todo.isChecked}return todo;})
            }
        default: return state
    }
}

// const todoReducer=createReducer(initalState,{
//     [createTodo.type]:(state:TodoState,action:PayloadAction<string>)=>{state.todoItems.push({id:autoId++,text:action.payload,isChecked:false})},
//     [toggleTodo.type]:(state:TodoState,action:PayloadAction<number>)=>{state.todoItems.filter(todo=>todo.id!==action.payload)},
//     [removeTodo.type]:(state:TodoState,action:PayloadAction<number>)=>{state.todoItems.map(todo=>{if(todo.id===action.payload){todo.isChecked=!todo.isChecked}return todo})}
// })


export default todoReducer