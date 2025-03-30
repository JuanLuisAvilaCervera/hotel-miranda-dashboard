import styled from "styled-components"

export const KPI = styled.div`
    border-radius: 18px;
    background-color: white;
    display: inline-block;
    padding: 1rem;
    width: 25%;

    margin: 1rem;

`

export const KPIDiv = styled.div`
    display: flex;

`

export const KPIconDiv = styled.div`
    border-radius: 18px;
    background-color: #FFEDEC;
    width: 5rem;
    height: 5rem;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const KPIText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & h2, & h5{
        margin: 0;
    }
`