import React, {  useEffect, useState } from "react";
import Booking from "../../../interfaces/bookingInterface";
import { ProfilePic, Tables } from "./Table";
import User from "../../../interfaces/userInterface";
import Contact from "../../../interfaces/contactInteface";

const TableComponent = ({data} : {data: Booking[] | User[] | Contact[]}) => {

    

    const [columns , setColumns] = useState<Array <keyof typeof data[0]>>([]);
    const [page , setPage] = useState<number>(0);


    useEffect(() => {data ? setColumns(Object.keys(data[0]) as Array<keyof typeof data[0]>) : setColumns([])} , [data])

   const generateColumnName = (column : string) =>{

    console.log(typeof column)
    console.log(column)

        let columnNameArray = column.length > 0 ?  column.split("_") : [];

        for(let j = 0 ; j < columnNameArray.length ; j++){
            columnNameArray[j] = String(columnNameArray[j]).charAt(0).toUpperCase() + String(columnNameArray[j]).slice(1);
        }

        console.log(columnNameArray)

        return columnNameArray.join(" ");;
    }
    
    return <Tables>
            <thead>
                <tr>
                    {[...columns].map((column, key) => {

                        const columnName = generateColumnName(column);

                        return <th key={key}>{columnName}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                    {[...data].slice(page*10, page*10 +10).map((row : any , key : number) => {
                            return <tr key={key}>
                                {
                                    
                                    [...columns].map((column : string , columnKey : number) => {
                                        console.log(column)
                                        return column == "photo" ?
                                         <td key={columnKey}><ProfilePic src={String(row[column])} alt=""/></td> :
                                          <td key={columnKey}>{ String(row[column]).substring(0,100)}</td>
                                        
                                    })
                                }
                            </tr>
                        })
                    }
            </tbody>
        </Tables>
    
}

export default TableComponent;