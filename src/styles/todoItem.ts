import styled from 'styled-components'

const Body=styled.div`
width:35rem;
min-height:3rem;
border-radius:10px;
box-shadow:1px 1px 0px 2px rgba(0,0,0,0.3);
margin-top:1rem;
box-sizing:border-box;
padding:1rem;

display:flex;
justify-content:space-between;
align-items:center;
`
const Left=styled.div`
display:flex;
align-items:center;
`

const Text=styled.div`
margin-left:1rem;
font-family: 'ELAND_Choice_L';
text-align:left;    
`

const Icon=styled.i`
color:#bfbfbf;
&:hover{
    color:#ed0000
}
`
export {Body,Left,Text,Icon}

