import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    h1{
        font-size: 16px;
        font-weight: bold;
        color: ${(props) => props.theme.colors.primary};
    }
`;
