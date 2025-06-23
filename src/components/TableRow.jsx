import React from "react";
import TableCell from "./TableCell";

const TableRow = ({ row }) => {
  return (
    <tr>
      {row.map((_, i) => (
        <TableCell key={i} />
      ))}
    </tr>
  );
};

export default TableRow;

