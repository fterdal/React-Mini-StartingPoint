import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Table from "./Table.jsx";

const App = () => {

 

    const [numRows, setNumRows] = useState(3);
    const [numCols, setNumCols] = useState(3);
    const [grid, setGrid] = useState(
        Array(3).fill(null).map(() => Array(3).fill('white'))
    );
    const [selectedColor, setSelectedColor] = useState('red');

}


const addRow = () => {
        setNumRows(prevNumRows => {
            const newNumRows = prevNumRows + 1;
            const newRow = Array(numCols).fill('white');
            setGrid(prevGrid => [...prevGrid, newRow]);
            return newNumRows;
        });
    };

    const deleteRow = () => {
        setNumRows(prevNumRows => {
            if (prevNumRows > 1) {
                const newNumRows = prevNumRows - 1;
                setGrid(prevGrid => prevGrid.slice(0, newNumRows));
                return newNumRows;
            }
            return prevNumRows;
        });
    };



const addColumn = () => {
        setNumCols(prevNumCols => {
            const newNumCols = prevNumCols + 1;
            setGrid(prevGrid => prevGrid.map(row => [...row, 'white']));
            return newNumCols;
        });
    };


    const deleteColumn = () => {
        setNumCols(prevNumCols => {
            if (prevNumCols > 1) {
                const newNumCols = prevNumCols - 1;
                setGrid(prevGrid => prevGrid.map(row => row.slice(0, newNumCols)));
                return newNumCols;
            }
            return prevNumCols;
        });
    };

const fillGrid = () => {
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row =>
        row.map(() => selectedColor)
      );
      return newGrid;
    });
  };

  const clearGrid = () => {
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row =>
        row.map(() => 'white')
      );
      return newGrid;
    });
  };
    

  return (
    <div className="app">
      <h1>Grid Maker</h1>
      <Table grid={grid} />
      <div className="controls">
        <button id="add-row" onClick={addRow}>Add Row</button>
        <button id="delete-row" onClick={deleteRow}>Delete Row</button>
        <button id="add-column"  onClick={addColumn} >Add Column</button>
        <button id="delete-column" onClick={deleteColumn}>Delete Column</button>
        <select id="color-select" value={selectedColor}>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
        </select>
        <button id="fill-uncolored" >Fill Uncolored</button>
        <button id="fill-grid" onClick={fillGrid}>Fill Grid</button>
        <button id="clear-grid" onClick={clearGrid}>Clear Grid</button>
      </div>


    </div>
  );
};
    
const root = createRoot(document.getElementById("root"));
root.render(<App />);