import React, { useState } from "react";
import { Page } from "../../components/common/page.styles";
import Table from "../../components/common/Tables/Table.jsx";
import Bookings from "./Bookings.json";
import TableMenu from "../../components/common/Tables/TableMenu.jsx";

const BookingsPage = () => {

    const [data , setData] = useState(Bookings);

    return <Page>
            <TableMenu>
                <li>All Bookings</li>
                <li>Checking In</li>
                <li>Checking Out</li>
                <li>In Progress</li>
            </TableMenu>
            <Table data={Bookings}/>
            </Page>;
}

export default BookingsPage;