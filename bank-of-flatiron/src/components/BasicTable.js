import React,{useMemo} from "react";
import {useTable} from "react-table"
import  DB from "./db.json"
import { COLUMNS } from "./columns";


export function BasicTable(){
    const columns = useMemo(()=> COLUMNS,[])
    const data = useMemo(()=> DB,[])

    const tableInstance = useTable({
        columns,
        data
    })
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow, } = tableInstance
    
    return(
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=>(
                <tr{...headerGroup.getHeaderGroupProps()}>
                {
                    headerGroup.headers.map( (column) =>(
                    <th>{...column.getHeaderProps()}{column.render("header")}</th>
                    ))}
                    
                </tr>))}
                
            </thead>
            <tbody{...getTableBodyProps()}>{
                rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell) =>{
                                    return <td{...cell.getCellProps()}>{cell.render("cell")}</td>
                            })}
                        
                        </tr>
                    )  
                 })}
                
                   
            </tbody>

        </table>
    )
}