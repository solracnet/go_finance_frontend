import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    body{
        background-color: ${(props) => props.theme.colors.black2};
        color: ${(props) => props.theme.colors.white};
    }

    button{
        background-color: ${(props) => props.theme.colors.primary};
        padding: 16px;
        border-radius: 8px;
        border: none;
        color: ${(props) => props.theme.colors.white};
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
        transition: all 1;

        &:hover{
            background-color: ${(props) => props.theme.colors.secondary};
        }
    }

    input{
        background-color: ${(props) => props.theme.colors.black3};
        color: ${(props) => props.theme.colors.white};
        border: none;
        min-height: 27px;
        border-radius: 4px;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
        ::-webkit-input-placeholder {
            color: #4b4747;
            font-size: 12px;
            font-weight: 500;
        }
    }
`