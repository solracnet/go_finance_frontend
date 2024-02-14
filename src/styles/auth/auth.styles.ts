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
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    height: 60%;
    border-radius: 16px;
    background-color: ${(props) => props.theme.colors.black1};

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
