import styled from "styled-components";

export const FormElement = styled.form`
    border-radius: 3rem;
    -webkit-box-shadow: -1px 11px 18px 3px rgba(0,0,0,0.61);
    -moz-box-shadow: -1px 11px 18px 3px rgba(0,0,0,0.61);
    box-shadow: -1px 11px 18px 3px rgba(0,0,0,0.61);
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`

export const FormInput = styled.input`
    border-radius: 5px;
    border: solid 1px rgb(205, 205, 205);
    background-color: #F8F8F8;
    margin-bottom: 1rem;
    min-width: 3rem;
    padding: 0.2rem 1rem;
`
export const FormTextArea = styled.textarea`
    border-radius: 5px;
    border: solid 1px rgb(205, 205, 205);
    background-color: #F8F8F8;
    margin-bottom: 1rem;
    width: 15rem;
`