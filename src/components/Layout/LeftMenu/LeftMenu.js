import styled from "styled-components";

export const ListElement = styled.li`

    width: 100%;
    heigth: 3rem;
    background-color: transparent;
    padding: 1rem 2rem;

    color:${(props) => props.$active ? "#E23428" : "#799283"} ;
    border-left: ${(props) => props.$active === "active" ? "solid 3px #E23428" : "none"};
`;



export const LeftContainer = styled.div`
        
        height: 100vh;
        background-color: white;

        grid-area: left;
        box-shadow: 13px 3px 40px #00000005;
        display: ${(props) => props.$visibility ? "block" : "none"}
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
    margin-left: 0.5rem;
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
    width: 45%;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
    justify-self: center;
`;



export const Correo = styled.p`
    font-size: 11px;
    margin: 0;
`

// export const Button = styled.button`
//     border: none;
//     border-radius: 10px;
//     background-color: light-green;
//     color: green;
//     padding: 1rem;
// `;