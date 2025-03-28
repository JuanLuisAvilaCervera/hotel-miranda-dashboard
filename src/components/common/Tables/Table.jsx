import React, {  useEffect, useState } from "react";
import { ProfilePic, Tables } from "./Table.style";

const Table = ({data}) => {

    const [columns , setColumns] = useState([...Object.keys(data[0])]);
    const [page , setPage] = useState(0);



    function generateColumnName(column){


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
                                        if(column == "photo"){
                                            return <td key={columnKey}><ProfilePic src={row[column]} alt=""/></td>
                                        }
                                        return <td key={columnKey}>{ String(row[column]).substring(0,100)}</td>
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