import React from 'react';
import TableCell from './TableCell.jsx';

const TableRow = ({ row, rowIndex, onCellClick }) => {
  return (
    <tr>
      {row.map((cellColor, colIndex) => (
        <TableCell
          key={`${rowIndex}-${colIndex}`}
          color={cellColor}
          rowIndex={rowIndex}
          colIndex={colIndex}
          onCellClick={onCellClick}
        />
      ))}
    </tr>
  );
};

export default TableRow;