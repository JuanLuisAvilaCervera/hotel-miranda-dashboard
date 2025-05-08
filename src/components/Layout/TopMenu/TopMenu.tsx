import { CiMail } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";



import { Burguer, MiddleSpace,  Title,  TopContainer } from "./TopMenuStyles";
import { IconContext } from "react-icons";

const TopMenu  = ({pagetitle , toggle , handleLogout} : {pagetitle : string , toggle : Function , handleLogout : Function}) => {

    return(
        
        <TopContainer>
            <Burguer onClick={() => {toggle()}}/>
            <Title>{pagetitle}</Title>
            <MiddleSpace />
            <IconContext.Provider value={{size: "2rem"}}>
                <div>
                    <CiMail />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{size: "2rem"}}>
                <div>
                    <CiBellOn />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{size: "2rem"}}>
                <div id="logout" onClick={() => {handleLogout()}}>
                    <CiLogout/>
                </div>
            </IconContext.Provider>
        </TopContainer>
        
    );
}

export default TopMenu;