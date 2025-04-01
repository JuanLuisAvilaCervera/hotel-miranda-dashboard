import styled from "styled-components";

export const TopContainer = styled.div`
    grid-area: top;

    padding: 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-between;
`;

export const Burguer = styled.img`
    width: 1rem;
    height: 1rem;
    margin: 0 2rem;
    justify-self: start;
`;


export const MiddleSpace = styled.div`
    width: 50%;
`
export const Title = styled.h1`
    font-size: 28px;
`