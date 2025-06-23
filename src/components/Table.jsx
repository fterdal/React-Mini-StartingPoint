import React from "react";
import TableRow from "./TableRow";

const Table = ({ grid }) => {
  return (
    <table>
      <tbody>
        {grid.map((row, i) => (
          <TableRow key={i} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

