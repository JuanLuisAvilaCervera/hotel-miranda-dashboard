import styled from "styled-components";

export const ConfirmModal = styled.div`
    display: ${(props) => props.$display !== "" || props.$display !== "none" ? props.$display : "none"};
    position: absolute;
    border: solid 2px green;
    border-radius: 2rem;
    width: 20rem;
    top: 20%;
    left: 50%;
    background-color: white;
    text-align: center;
    padding: 1rem;
`