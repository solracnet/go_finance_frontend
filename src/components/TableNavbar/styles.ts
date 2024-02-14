import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;

    button{
        width: 250px;
        height: 30px;
        padding: 0;
        font-size: 16px;
    }
`;

export const LeftSide = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    align-items: end;
`;
