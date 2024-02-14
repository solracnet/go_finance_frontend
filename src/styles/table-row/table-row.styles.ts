import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-bottom: 20px;

    span{
        font-size: 16px;
        color: ${props => props.theme.colors.white};
        width: 300px;
        &:nth-child(2){
            width: 100%;
        }
    }

    img {
        cursor: pointer;
        margin-right: 10px;
    }
`;
