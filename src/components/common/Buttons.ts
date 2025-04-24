import styled from "styled-components";

export const Button = styled.button<{$backgroundcolor : string}>`

    background-color: ${(props) => props.$backgroundcolor || "#EBF1EF"};
    color: ${(props) => props.color || "green"};
    border: none;
    border-radius: 10px;
    padding: 1rem;

`;

export const InputButton = styled.input<{$backgroundcolor : string}>`

    background-color: ${(props) => props.$backgroundcolor || "#EBF1EF"};
    color: ${(props) => props.color|| "green"};
    border: none;
    border-radius: 10px;
    padding: 1rem;

`;