import React from 'react'
import * as S from '../styles/todoItem'

interface Props{
    text:string;
    isChecked:boolean;
    onToggle():void;
    onRemove():void;
}
const TodoItem:React.FC<Props>= ({text,isChecked,onToggle,onRemove})=>{

    return(
    <S.Body>
        <S.Left>
            <input type="checkbox" onClick={()=>onToggle()}/>
            <S.Text>{isChecked?<del>{text}</del>:text}</S.Text>
        </S.Left>
        <S.Icon className="fas fa-trash" onClick={()=>onRemove()}></S.Icon>
    </S.Body>
)
}


export default TodoItem;