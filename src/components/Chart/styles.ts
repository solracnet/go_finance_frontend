import styled from "styled-components";

export const Container = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

interface SubtitleProps {
    color: string
}

export const SubtitleContainer = styled.div<SubtitleProps>`
    display: flex;
    gap: 10px;
    align-items: center;

    div{
        background-color: ${(props) => props.color};
        width: 30px;
        height: 30px;
    }
`;
