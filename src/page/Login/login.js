import styled from "styled-components";

export const LoginBody = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #F8F8F8;
    flex-direction: column;
    
`
export const LoginContainer = styled.div`
    margin-top: 3rem;
    border-radius: 3rem;
    -webkit-box-shadow: -1px 11px 18px 3px rgba(0,0,0,0.61);
    -moz-box-shadow: -1px 11px 18px 3px rgba(0,0,0,0.61);
    box-shadow: -1px 11px 18px 3px rgba(0,0,0,0.61);
    width: 20rem;
    max-width: 50%;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: white;

`

export const LoginInput = styled.input`
    border-radius: 5px;
    border: solid 1px rgb(205, 205, 205);
    background-color: #F8F8F8;
    margin-bottom: 1rem;
    width: 15rem;

`