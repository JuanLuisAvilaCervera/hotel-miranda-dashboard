import styled from "styled-components";

export const Button = styled.button`

    background-color: ${(props) => props.$backgroundcolor || "#EBF1EF"};
    color: ${(props) => props.color || "green"};
    border: none;
    border-radius: 10px;
    padding: 1rem;

`;

export const InputButton = styled.input`

    background-color: ${(props) => props.$backgroundcolor || "#EBF1EF"};
    color: ${(props) => props.color|| "green"};
    border: none;
    border-radius: 10px;
    padding: 1rem;

`;