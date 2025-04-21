import styled from "styled-components";

export const ConfirmModal = styled.div`
    display: ${(props) => props.$display !== "" || props.$display !== "none" ? props.$display : "none"};
    position: absolute;
    -webkit-box-shadow: 0px 2px 8px 8px rgba(0,0,0,0.17);
    -moz-box-shadow: 0px 2px 8px 8px rgba(0,0,0,0.17);
    box-shadow: 0px 2px 8px 8px rgba(0,0,0,0.17);
    border-radius: 2rem;
    width: 20rem;
    top: 20%;
    left: 50%;
    background-color: white;
    text-align: center;
    padding: 1rem;
`

export const ConfigModal = styled.div`
    display: ${(props) => props.$display !== "" || props.$display !== "none" ? props.$display : "none"};
    position: absolute;
    background-color: white;
    -webkit-box-shadow: 0px 2px 8px 8px rgba(0,0,0,0.17);
    -moz-box-shadow: 0px 2px 8px 8px rgba(0,0,0,0.17);
    box-shadow: 0px 2px 8px 8px rgba(0,0,0,0.17);
    border-radius: 1rem;
    padding: 0.5rem;
    right: 0;
    top: 4rem;
`

export const ModalOption = styled.button`
    &:hover{
        -webkit-box-shadow: 0px 2px 8px 8px rgba(0,0,0,0.17);
        -moz-box-shadow: 0px 2px 8px 8px rgba(0,0,0,0.17);
        box-shadow: 0px 2px 8px 8px rgba(0,0,0,0.17);
    }
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 100%;
    background-color: white;
    border: none;
    margin: 0.2rem;
`