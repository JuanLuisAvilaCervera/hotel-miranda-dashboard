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
    width: 2rem;
    height: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    justify-self: start;
`;


export const MiddleSpace = styled.div`
    width: 50%;
`