import styled, { createGlobalStyle, css, keyframes } from 'styled-components'
import { Loader } from '@styled-icons/boxicons-regular'

const LABEL_FONT_SIZE = '16px'
const LABEL_COLOR = '#666'
const INPUT_FONT_SIZE = '12px'
const INPUT_FOCUS_COLOR = '#FD0'
const TITLE_COLOR = '#CCF'
const BORD_ON_HOVER = '2px'


const spin = keyframes`
from{
    transform: rotate(8deg);
}
to {
    tranform: rotation(360deg);
}`
export const SpinningLoader = styled(Loader)`
color: blue;
size: 20;
display: inline-block;
width: 100%;
animation: 2s linear ${spin} infinite`

export const GlobalStyle = createGlobalStyle`
html{ height : 100%; }
body { height : 50%; font-family: Arial, sans-serif; font-size: ${LABEL_FONT_SIZE}; background: linear-gradient(to bottom, #D3C, #F9E); margin: 0; color: ${LABEL_COLOR}}`

const inputs = css` 
background-color: #EEE;
font-size: ${INPUT_FONT_SIZE};
height; 30px;
border-radius: 10px;
border: 1px solid #DDD;
margin: 10px 0 20px 0;
padding: 5px;
box-sizing: border-box;
&:focus{
outline: none !important;
border: 1px solid ${INPUT_FOCUS_COLOR};
box-shadow: 0 0 10px #A71;
}`

export const STitle = styled.h2`
margin: auto 8;
text-aling: center;
padding: 10px
color: ${TITLE_COLOR}`

export const SForm = styled.form`
margin: 120px auto 120px;
width: 100%;
max-width: 780px;
padding: 30px;
background-color: #FFF;
border-radius:20px;
box-sizing: border-box;
box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.3);`

export const SInput = styled.input`
display: block;
width: 100%;
${inputs}`

export const SInputRadio = styled.input`
background-color: #EEE;
font-size: 10px;`

export const STextArea = styled.textarea`
background-color: #EEE;
width: 100%;
min-height: 100%;
resize: none;
${inputs}
`
export const SButton = styled.button<{ fontColor?: string; backgroundColor?: string; onHoverBorderColor?: string; center?: boolean }>`
text-aling: center;
margin: ${(props => props.center ? '0px auto' : '')};
display: block;
background-color: black;
background-color: ${(props => props.backgroundColor)};
color: white;
color: ${(props => props.fontColor)};
font-size: 14px;
border: 1px solid;
border-radius: 10px;
height: 40px;
padding: 0 20 px;
cursor: pointer;
box-sizing: border-box;
&:hover{
    border:${BORD_ON_HOVER} solid ${props => props.onHoverBorderColor}
}`

export const SFieldSet = styled.fieldset`
border: 1px solid #DDD;
border-radius: 8px;
font-size: 18px;
padding: 10px;
margin: 20px 0;
legend{ 
    padding: 0 10px;
    font-size:v${LABEL_FONT_SIZE};
}
label{ 
    padding-right: 20px;
    font-size: ${INPUT_FONT_SIZE};
}
input{
    margin-right: 10px;
}`

export const SError = styled.div`
margin: auto 0;
padding: 10px;
text-align: center;
color: red;
font-weight: 800;`