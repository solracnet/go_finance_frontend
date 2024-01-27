import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.black1};
    width: 373px;
    height: 177px;
    display: flex;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.24);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    h1{
        color: ${props => props.theme.colors.primary};
        font-size: 30px;
    }

    p{
        color: ${props => props.theme.colors.white};
        font-size: 28px;
    }

`;

export const ValueLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;