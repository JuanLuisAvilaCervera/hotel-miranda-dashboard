import React from "react";
import { ClientName, KPI, KPIconDiv, KPIDiv, KPIText, LatestReviews, Review, ReviewClient } from "./Dashboard";
import { IoBedOutline } from "react-icons/io5";
import { Page } from "../../components/common/page";
import { IconContext } from "react-icons";
import { Portrait } from "../../components/common/commonStyles";

const DashboardPage = () => {
    return <>
        <Page $alignment={"center"}>
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
            <LatestReviews>
                <h3>Latest Review by Customers</h3>
                <Review>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat recusandae ducimus quam voluptate sit vitae et, quia sed suscipit laudantium distinctio molestias laboriosam nemo quisquam praesentium neque ipsa impedit temporibus?
                    <ReviewClient>
                        <Portrait $size={"3rem"} $margin={"0 1rem"}/>
                        <ClientName>
                            <h5>Juan Luis Ávila</h5>
                            <p>4min</p>
                        </ClientName>
                    </ReviewClient>
                </Review>
                <Review>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat recusandae ducimus quam voluptate sit vitae et, quia sed suscipit laudantium distinctio molestias laboriosam nemo quisquam praesentium neque ipsa impedit temporibus?
                    <ReviewClient>
                        <Portrait $size={"3rem"} $margin={"0 1rem"}/>
                        <ClientName>
                            <h5>Juan Luis Ávila</h5>
                            <p>4min</p>
                        </ClientName>
                    </ReviewClient>
                </Review>
                <Review>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat recusandae ducimus quam voluptate sit vitae et, quia sed suscipit laudantium distinctio molestias laboriosam nemo quisquam praesentium neque ipsa impedit temporibus?
                    <ReviewClient>
                        <Portrait $size={"3rem"} $margin={"0 1rem 0 0"}/>
                        <ClientName>
                            <h5>Juan Luis Ávila</h5>
                            <p>4min</p>
                        </ClientName>
                    </ReviewClient>
                </Review>
            </LatestReviews>
        </Page>

    </>;
}

export default DashboardPage;