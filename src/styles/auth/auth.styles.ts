import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;;
    justify-content: center;
    flex-direction: column;
    width: 45%;
    border-radius: 16px;
    background-color: ${(props) => props.theme.colors.black1};
    padding: 40px;

    img{
        margin-bottom: 50px;
    }

    a{
        color: ${(props) => props.theme.colors.primary};
        text-decoration:none;
        &:hover{
            text-decoration: underline;
        }
    }

    input{
        height: 50px;
        width: 490px;
        border-radius: 8px;
        ::-webkit-input-placeholder{
            font-size: 20px;
        }
    }

    button{
        height: 50px;
        width: 490px;
        padding: 0;
        font-size: 20px;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
`;

export const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
`;
