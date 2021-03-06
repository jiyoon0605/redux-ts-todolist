import React,{useState,useMemo} from 'react'
import * as S from '../styles/main'
import TodoItem from './todoItem'
import { useDispatch, useSelector } from "react-redux";
import {actionCreators as todoAction} from '../module/todo'
import {rootReducer}from '../store'



const Main:React.FC=()=>{
    const store=useSelector((store:ReturnType<typeof rootReducer>)=>store.todoReducer);
    const dispatch = useDispatch();

    const onToggle=(id:number)=>{dispatch(todoAction.toggleTodo(id))}
    const onRemove=(id:number)=>{dispatch(todoAction.removeTodo(id))}
    const onCreate=(text:string)=>{dispatch(todoAction.createTodo(text))}

    const todoItemList=store.todoItems.map(todo=>
        todo?(
            <TodoItem 
            key={todo.id}
            isChecked={todo.isChecked}
            onToggle={()=>onToggle(todo.id)}
            onRemove={()=>onRemove(todo.id)}
            text={todo.text}/>
            ):null);
            const [text,setText]=useState<string>("")
            const textLength=useMemo(()=>text.length,[text])


    return(
            <S.Container>
                <S.GlobalStyle/>
                <S.Title>TO DO LIST</S.Title>
                <S.InputField>
                    <S.Input value={text} onChange={e=>setText(e.target.value)}/>
                    <S.CountText>{textLength}/20</S.CountText>
                    <S.SubmitBtn onClick={()=>{onCreate(text);setText("")}}>확인</S.SubmitBtn>
                </S.InputField>
               {todoItemList}
            </S.Container>
        )
}


export default Main;