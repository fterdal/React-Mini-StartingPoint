import React from 'react';

const TableCell = ({ color, rowIndex, colIndex, onCellClick }) => {
  const cellStyle = {
    backgroundColor: color,
    width: '30px',
    height: '30px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    cursor: 'pointer'
  };

  return (
    <td
      style={cellStyle}
      onClick={() => onCellClick(rowIndex, colIndex)}
    ></td>
  );
};

export default TableCell;
