import styled from 'styled-components'
import style, {createGlobalStyle }from'styled-components'

const GlobalStyle=createGlobalStyle`
body{
    @font-face {
    font-family: 'ELAND_Choice_B';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/ELAND_Choice_B.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'ELAND_Choice_L';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/ELAND_Choice_L.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
display:flex;
justify-content:center;
}`


const Title=style.h1`
font-family: 'ELAND_Choice_B';
`
const InputField=style.div`

border-radius:20px;
box-shadow:1px 1px 1px 1px rgba(0,0,0,0.5);
width:30rem;
height:3rem;
box-sizing:border-box;
padding:0.5rem 1rem;

display:flex;
justify-content:space-between;

`
const Input=style.input`
font-family: 'ELAND_Choice_B';
width:100%;
height:100%;
border:none;
outline:none;
font-size:1.5rem;
`
const CountText=style.div`
display:flex;
align-items:center;
font-family: 'ELAND_Choice_L';
color:9CB2F0

`
const SubmitBtn=style.button`
font-family: 'ELAND_Choice_B';
width:5rem;
height:100%;
border-radius:20px;
border:none;
outline:none;
box-shadow:1px 1px 1px 0px rgba(0,0,0,0.5);
background-color:#553C8B;
color:white;
margin-left:1rem;
&:active{
    box-shadow:inset 1px 1px 1px 1px rgba(0,0,0,0.5);
}
`

const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center
`
export {GlobalStyle,Title,InputField,Input,SubmitBtn,CountText,Container}