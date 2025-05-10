import React, {  useEffect, useState } from "react";
import { ProfilePic, Tables } from "./Table";
import { Button } from "../Buttons";
import { useNavigate } from "react-router";
import { UserInterface } from "../../../interfaces/userInterface";
import { YMDtoMDY } from "../../../global/dateFormating";

const TableComponent = ({data , columns} : {data : UserInterface[] , columns: ColumnInterface[]}) => {

    const navigate = useNavigate();

    const [page , setPage] = useState<number>(0);


    
    return <Tables>
            <thead>
                <tr>
                    {[...columns].map((column, key) => {
                        return <th key={key}>{column.name}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                    {[...data].slice(page*10, page*10 +10).map((row : any , key : number) => {
                            return <tr key={key}>
                                {
                                    
                                    [...columns].map(( column , columnKey) => {
                                        switch(column.type){
                                            case "profile":
                                                return <td key={columnKey}>
                                                    <ProfilePic src={row[column.data[2]]} alt=""/>
                                                    <p>{ String(row[column.data[0]]).substring(0,100)} { String(row[column.data[1]]).substring(0,100)}</p>
                                                    <p>#{ String(row[column.data[3]]).substring(0,100)}</p>
                                                </td>
                                            case "special_request":
                                                return <td key={columnKey}><Button $backgroundcolor="" onClick={() => {
                                                    localStorage.setItem('selectedBooking', JSON.stringify(row))
                                                    navigate("/bookingsdetail")
                                                }}>View Details</Button></td>
                                            
                                            case "date":
                                                if( Object.prototype.toString.call(row[column.data[0]]) === '[object Date]'){
                                                    console.log(row[column.data[0]])
                                                    return <td key={columnKey}>{YMDtoMDY(row[column.data[0]])}</td>
                                                }
                                                else if(typeof row[column.data[0]] === "string")
                                                    return <td key={columnKey}>{row[column.data[0]].substring(0, 10)}</td>
                                                else
                                                    return <td key={columnKey}>{ String(row[column.data[0]]).substring(0,100)}</td>
                                            break;

                                            default:
                                                return <td key={columnKey}>{ String(row[column.data[0]]).substring(0,100)}</td>

                                        }
                                    })
                                }
                            </tr>
                        })
                    }
            </tbody>
        </Tables>
    
}

export default TableComponent;