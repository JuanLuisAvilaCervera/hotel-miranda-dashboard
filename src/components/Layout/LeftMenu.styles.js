import styled from "styled-components";

export const NavList = styled.li`
    color: #799283;
    width: 100%;
    heigth: 3rem;
    background-color: transparent;
    padding: 1rem 4rem;

    &:hover{
        color: #E23428;
        border-left: solid 5px red;
    }

`;

export const UnorderedList = styled.ul`
    width: 100%;
    background-color: transparent;
    list-style: none;
    padding: 0;

    margin-top: 4rem;

`;

export const LeftContainer = styled.div`
        
        height: 100vh;
        background-color: white;
        padding-top: 1rem;

        grid-area: left;
`;

export const LogoContainer = styled.div`
        width: 100%;
       display:flex;
       flex-direction: row;
    `;

export const Image = styled.img`
    height: 100%;
    display: inline-block;
    margin-top: 1rem;
    margin-left: 2rem;
`;

export const HeaderContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    text-align:left;
    margin-left: 2rem;
`;

export const FirstHeader = styled.h1`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 0;
`;
export const SecondHeader = styled.h2`
    font-size: 12px;
    color:    #5D5449;
    margin-top: 0;
    margin-bottom: 0;
`;

export const UserPortrait = styled.div`
    padding: 2rem;
    margin: 3rem;
    width: 45%;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
`;

export const Portrait = styled.div`

    width: 5rem;
    height: 5rem;
    background-color: grey;
    border-radius: 10px;

`;

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: light-green;
    color: green;
    padding: 1rem;
`;