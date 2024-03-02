import styled from 'styled-components';

export const OutsideContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #131212a3;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
`;

export const Container = styled.div`
    z-index: 101;
    width: 600px;
    background-color: ${props => props.theme.colors.black2};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 50px;

    h2 {
        color: ${props => props.theme.colors.primary};
        font-size: 24px;
        margin-bottom: 20px;

    }

    input{
        height: 50px;
        margin-bottom: 20px;
        ::-webkit-input-placeholder{
            font-size: 20px;
        }
    }

    button{
        height: 50px;
        width: 100%;
        margin-top: 20px;
    }
`;
