import React, { ReactNode } from "react";
import { useNavigate } from "react-router";
import {ListElement} from "./LeftMenu/LeftMenuStyles";

const NavList = ({page, content, active , activate} : {page : string, content : ReactNode , active : "" | "active" , activate :Function}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(page);
        activate();
    }

    return <ListElement onClick={handleClick} $active={active}>{content}</ListElement>;
}

export default NavList