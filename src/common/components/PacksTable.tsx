import { useState } from "react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { AgGridReact } from "ag-grid-react/lib/agGridReact"
import { ColDef } from "ag-grid-community/dist/lib/entities/colDef"

type PacksTablePropsType = {}

export const PacksTable: React.FC<PacksTablePropsType> = ({}) => {
  const [rowData] = useState([
    { Name: "Toyota", Cards: "Celica", LastUpdated: "30.12.22" , CreatedBy:'string', Actions: ''}
  ])


  const [columnDefs] = useState<ColDef<{ Name: string; Cards: string; LastUpdated: string; CreatedBy: string, Actions: any }, any>[]>([
    { field: "Name" },
    { field: "Cards" },
    { field: "LastUpdated" },
    { field: "CreatedBy" },
    { field: "Actions" },
  
  ])

  return (
    <div className="ag-theme-alpine" style={{height:400, width: '100%'}}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  )
}
