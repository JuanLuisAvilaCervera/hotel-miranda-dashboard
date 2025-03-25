import React from "react";
import LogoIcon from "../../resources/img/logo-icon.png";
import { LogoContainer , Image , HeaderContainer , FirstHeader , SecondHeader } from "./LeftMenu.styles";

const Logo = () => {

    return(
        <LogoContainer>
            <Image src={LogoIcon}/>
            <HeaderContainer>
                <FirstHeader/>
                <SecondHeader/>
            </HeaderContainer>
        </LogoContainer>
    )
}

export default Logo;