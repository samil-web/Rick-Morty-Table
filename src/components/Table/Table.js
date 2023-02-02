import "./Table.css"
// import TableHead from "./TableHead";
// import Button from '@mui/material/Button'
import React from "react";
// import { Button } from "bootstrap";
const Table = ({ filter, tabledata, openModal }) => {
  let display;
  const perPage = 5
  // let currentPage = (pagenumber - 1) * perPage
  // find total number of pages you need for the data and then render it 
  if (tabledata) {
    if (filter) {

      const filteredData = tabledata.filter(item =>
        item.id.toString().includes(filter)
      );
      tabledata = filteredData
    }
    display = tabledata.slice(0, perPage).map((data) => {
      let { id, name, year, color } = data;

      return (
        <div >


          <table>
            <tbody
              style={{ backgroundColor: `${color}` }}
            >
              <tr key={id}>
                <td>{id}</td>
                <td>{name}
                </td>
                <td>{year}</td>
                <td><button onClick={() => openModal(data)}>More...</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
  }
  else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
}
export default Table

