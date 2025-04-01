import styled from "styled-components"

export const KPI = styled.div`
    border-radius: 18px;
    background-color: white;
    display: inline-block;
    padding: 1rem;

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
    margin-right: 1rem;
    & h2, & h5{
        margin: 0;
    }
`

export const LatestReviews = styled.div`
    background-color: white;
    border-radius: 18px;
    width: 100%;
    text-align: left;
    padding: 1rem;
`

export const Review = styled.div`
    border-radius: 18px;
    display: inline-block;
    max-width: 25%;
    margin: 0 0.5rem;
    padding: 1rem;

    &:hover{
        box-shadow: 0px 16px 30px #00000014;

    }
`

export const ReviewClient = styled.div`
    margin-top: 1rem;
    display: flex;
`
export const ClientName = styled.div`
    display: inline-block;

    & *{
        margin: 0;
        vertical-align: middle;
    }
`