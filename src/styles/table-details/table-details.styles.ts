import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 8px;
    margin-top: 25px;
`;

export const Header = styled.div`
    background-color: ${props => props.theme.colors.black2};
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 18px;

    h1{
        font-size: 16px;
        width: 300px;
        color: ${props => props.theme.colors.primary};
        &:nth-child(2){
            width: 100%;
        }
        &:nth-child(3){
            width: 50px;
        }
    }
`;

export const Body = styled.div`
    background-color: ${props => props.theme.colors.black3};
    width: 100%;
    margin-top: 3px;
    padding-left: 18px;
    padding-top: 14px;
    padding-bottom: 1px;
`;
