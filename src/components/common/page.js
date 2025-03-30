import styled from "styled-components";


export const Page = styled.div`
    background-color: #F8F8F8;
    padding: 2rem;
    text-align: ${(props) => props.$alignment ? props.$alignment : "left"};
`