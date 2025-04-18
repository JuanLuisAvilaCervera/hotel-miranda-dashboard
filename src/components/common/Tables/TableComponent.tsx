import React, {  useEffect, useState } from "react";
import Booking from "../../../interfaces/bookingInterface";
import { ProfilePic, Tables } from "./Table";

const TableComponent = ({data} : {data: any}) => {

    

    const [columns , setColumns] = useState<Array <keyof Booking>>([]);
    const [page , setPage] = useState<number>(0);


    useEffect(() => {data ? setColumns(data.keys()) : setColumns([])} , [data])

   const generateColumnName = (column : string) =>{


        let columnNameArray = column.split("_");

        for(let j = 0 ; j < columnNameArray.length ; j++){
            columnNameArray[j] = String(columnNameArray[j]).charAt(0).toUpperCase() + String(columnNameArray[j]).slice(1);
        }

        return columnNameArray.join(" ");;
    }
    
    return <Tables>
            <thead>
                <tr>
                    {columns.map((column, key) => {

                        const columnName = generateColumnName(column);

                        return <th key={key}>{columnName}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                    {data.slice(page*10, page*10 +10).map((row : any) => {

                            return <tr>
                                {
                                    columns.map((column : string) => {
                                        return column == "photo" ?
                                         <td><ProfilePic src={String(row[column])} alt=""/></td> :
                                          <td>{ String(row[column]).substring(0,100)}</td>
                                        
                                    })
                                }
                            </tr>
                        })
                    }
            </tbody>
        </Tables>
    
}

export default TableComponent;