import React from "react";
import LogoIcon from "../../resources/img/Layout/logo-icon.png";
import { LogoContainer , Image , HeaderContainer , FirstHeader , SecondHeader } from "./LeftMenu.styles";

const Logo = () => {

    return(
        <LogoContainer>
            <Image src={LogoIcon}/>
            <HeaderContainer>
                <FirstHeader>travl</FirstHeader>
                <SecondHeader>Hotel Admin Dashboard</SecondHeader>
            </HeaderContainer>
        </LogoContainer>
    )
}

export default Logo;