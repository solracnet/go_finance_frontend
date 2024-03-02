import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 200px;
    width: 100%;
    max-width: 1200px;
`

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

    input, select{
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

        &:focus{
            outline: none;
        }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus{
        background-color: ${(props) => props.theme.colors.black3};
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: ${(props) => props.theme.colors.white};
        ::-webkit-input-placeholder {
            color: #4b4747;
            font-size: 12px;
            font-weight: 500;
        }
    }
    input[type="date"]{
        ::-webkit-calendar-picker-indicator {
            background-image: url('/calendar.png');
            cursor: pointer;
        }
    }
    select{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 150px;
        background-image: linear-gradient()(45deg, transparent 50%, #ff7a00 50%), linear-gradient(135deg, #ff7a00 50%, transparent 50%);
        background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px);
        background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
        background-repeat: no-repeat;
    }
`
