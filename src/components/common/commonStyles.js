import styled from "styled-components"



export const Portrait = styled.div`

    width: ${(props) => props.$size ? props.$size : "1rem"};
    height: ${(props) => props.$size ? props.$size : "1rem"};
    background-color: grey;
    border-radius: 10px;
    margin: ${(props) => props.$margin ? props.$margin : 0}

`;

export const Form = styled.form`

`