import React from "react";
import { KPI, KPIconDiv, KPIDiv, KPIText } from "./Dashboard";
import { IoBedOutline } from "react-icons/io5";
import { Page } from "../../components/common/page";
import { IconContext } from "react-icons";

const DashboardPage = () => {

    return <>
        <Page>
            <KPI>
                <KPIDiv>
                    <KPIconDiv>
                        <IconContext.Provider value={{color:'#E23428', size:'2.5rem'}}>
                            <IoBedOutline />
                        </IconContext.Provider>
                    </KPIconDiv>
                    <KPIText>
                        <h2>8,241</h2>
                        <h5>Rooms</h5>
                    </KPIText>
                </KPIDiv>
            </KPI>
            <KPI>
            <KPIDiv>
                <KPIconDiv>
                        <IconContext.Provider value={{color:'#E23428', size:'2.5rem'}}>
                            <IoBedOutline />
                        </IconContext.Provider>
                    </KPIconDiv>
                    <KPIText>
                        <h2>8,241</h2>
                        <h5>Rooms</h5>
                    </KPIText>
                </KPIDiv>
            </KPI>
            <KPI>
                <KPIDiv>
                    <KPIconDiv>
                        <IconContext.Provider value={{color:'#E23428', size:'2.5rem'}}>
                            <IoBedOutline />
                        </IconContext.Provider>
                    </KPIconDiv>
                    <KPIText>
                        <h2>8,241</h2>
                        <h5>Rooms</h5>
                    </KPIText>
                </KPIDiv>
            </KPI>
        </Page>

    </>;
}

export default DashboardPage;