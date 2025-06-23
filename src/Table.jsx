import React from 'react';
import TableRow from './TableRow.jsx';

const Table = ({ grid, onCellClick }) => {
  return (
    <table>
      <tbody>
        {grid.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            row={row}
            rowIndex={rowIndex}
            onCellClick={onCellClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
