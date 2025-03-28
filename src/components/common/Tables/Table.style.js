import styled from "styled-components";

export const Tables = styled.table`

    border-radius: 18px;
    border: none;
    background-color: white;
    

    th, td{
        padding: 1rem;
        text-align: center;
        border: none;
        margin: 0;
        font-size: 12px;

    }

`
export const UnorderedList = styled.ul`
    width: 100%;
    background-color: transparent;
    list-style: none;
    padding: 0;


`;

export const NavList = styled.li`
    display: inline-block;
    heigth: 3rem;
    background-color: transparent;
    padding: 0.5rem;

    color:${(props) => props.$active ? "#135846" : "#6E6E6E"} ;
    border-bottom: ${(props) => props.$active === "active" ? "solid 3px #135846" : "solid 1px #6E6E6E"};
`

export const ProfilePic = styled.img`
    max-width: 2rem;
`
