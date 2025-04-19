import React, {  useEffect, useState } from "react";
import { ProfilePic, Tables } from "./Table.js";
import { Button } from "../Buttons.js";
import { useNavigate } from "react-router";

const Table = ({data, dataType}) => {

    

    const [columns , setColumns] = useState([]);
    const [page , setPage] = useState(0);

    const navigate = useNavigate();


    useEffect(() => {data ? setColumns([...Object.keys(data[0])]) : setColumns([])} , [data])

   const generateColumnName = (column) =>{


        let columnNameArray = column.split("_");

        for(let j = 0 ; j < columnNameArray.length ; j++){
            columnNameArray[j] = String(columnNameArray[j]).charAt(0).toUpperCase() + String(columnNameArray[j]).slice(1);
        }

        return columnNameArray.join(" ");;
    }
    
    return ( <>
        <Tables>
            <thead>
                <tr>
                    {columns.map((column, key) => {

                        const columnName = generateColumnName(column);

                        return <th key={key}>{columnName}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                    {data.slice(page*10, page*10 +10).map((row , key) => {

                            return <tr key={key}>
                                { 
                                    columns.map(( column , columnKey) => {
                                        switch(column){
                                            case "photo":
                                                return <td key={columnKey}><ProfilePic src={row[column]} alt=""/></td>
                                            case "special_request":
                                                return <td key={columnKey}><Button onClick={() => {
                                                    localStorage.setItem('selectedBooking', JSON.stringify(row))
                                                    navigate("/bookingsdetail")
                                                }}>View Details</Button></td>
                                            default:
                                                return <td key={columnKey}>{ String(row[column]).substring(0,100)}</td>

                                        }
                                    })
                                }
                            </tr>
                        })
                    }
            </tbody>
        </Tables>
        </>
    )
}

export default Table;