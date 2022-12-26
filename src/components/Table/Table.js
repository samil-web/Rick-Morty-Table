import "./Table.css"
// import TableHead from "./TableHead";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import Button from '@mui/material/Button'
import React from "react";
// import { Button } from "bootstrap";
const Table = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, origin, gender, species } = x;

      return (
        <div >


          <table style={{ backgroundColor: status === 'Dead' ? '#F6F8FA' : 'white' }}

          >
            <tbody

            >
              <tr key={id}>
                <td style={{ color: name === 'unknown' ? "#5F6569" : "#1A2328" }}>{name}
                  <br></br>
                  {species}
                </td>
                <td>
                  <img src={image} alt="" height={100} />
                </td>

                <td style={{ color: origin.name === 'unknown' ? "#5F6569" : "#1A2328" }}>{origin.name}</td>
                <td style={{ color: gender === 'unknown' ? "#5F6569" : "#1A2328" }}>{gender}</td>
                <td style={{ color: status === 'unknown' ? "#5F6569" : "#1A2328" }}>
                  {status === "Dead" ? <ErrorOutlineIcon style={{ fill: "red", fontSize: 18 }} /> : status === "unknown" ? <HelpOutlineIcon style={{ fill: "gray", fontSize: 18 }} /> : <CheckCircleOutlineIcon style={{ fill: "green", fontSize: 18 }} />}
                  {status}</td>
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

