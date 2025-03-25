import styled from "styled-components";

export const NavList = styled.li`
    color: red;
    width: 100%;
    heigth: 3rem;
    border-left: solid 3px red;ç
    list-style: none;
    background-color: transparent;

`;

export const UnorderedList = styled.ul`
    width: 100%;
    background-color: transparent;

`;

export const LeftContainer = styled.div`
        width: 15rem;
        height: 100vh;
        background-color: white;
        padding-top: 2rem;

        grid-area: left;
`;

export const LogoContainer = styled.div`
        width: 100%;
    `;

export const Image = styled.img`
    width: 50%;
    margin-bottom: 3rem;
`;

export const HeaderContainer = styled.div`
    display: inline-block;
`;

export const FirstHeader = styled.h1`
    font-size: 14px;
    font-weight: 700;
`;
export const SecondHeader = styled.h2`
    font-size: 12px;
`;