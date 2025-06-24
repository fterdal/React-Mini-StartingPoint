import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// This is a simple React application that renders a title and a grid layout

function App() {
  const [grid, setGrid] = React.useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);

  // State to keep track of the selected cell color
  // Default color is set to black
  const [selectedCell, setSelectedCell] = React.useState("#000000");

  // State to keep track if user is drawing on the grid
  const [isdrawing, setIsDrawing] = React.useState(false);

  // Function to add a new row to the grid
  const addRow = () => {
    const size = grid[0].length;
    const newGrid = [...grid, Array(size).fill("")];
    setGrid(newGrid);
  }

  // Function to delete the last row from the grid
  const deleteRow = () => {
    if (grid.length > 1) {
      setGrid(grid.slice(0, -1));
    }
  }

  // Function to add a new column to the grid
  const addColumn = () => {
    setGrid(grid.map(row => [...row, ""]));
  }

  // Function to delete the last column from the grid
  const deleteColumn = () => {
    if (grid[0].length > 1) {
      setGrid(grid.map(row => row.slice(0, -1)));
    }
  }

  // Function to fill all cells with the selected color
  const fillCells = () => {
    setGrid(grid.map(row => row.map(() => selectedCell)));
  }

  // Function to clear all cells
  const clearCells = () => {
    setGrid(grid.map(row => row.map(() => "")));
  }

  // Function to Fill all remaining cells with the selected color
  const fillRemainingCells = () => {
    setGrid(grid.map(row => row.map(cell => cell || selectedCell)));
  }
  // function for drawing on the grid
  const handleMouseDown = () => {
    setIsDrawing(true);
  }

  const handleMouseUp = () => {
    setIsDrawing(false);
  }

  const handleMouseOver = (event) => {
    const target = event.target;
    if (target.tagName === "TD" && isdrawing) {
      const cellIndex = target.cellIndex;
      const rowIndex = target.parentNode.rowIndex;
      drawOnGrid(rowIndex, cellIndex);
    }
  }

  return (
    <div className="app">
      <h1 className="title">Grid</h1>
      <div className="buttons">
        <button className="button" onClick={addRow}>Add Row</button>
        <button className="button" onClick={deleteRow}>Delete Row</button>
        <button className="button" onClick={addColumn}>Add Column</button>
        <button className="button" onClick={deleteColumn}>Delete Column</button>
        <button className="button" onClick={fillCells}>Fill Cells</button>
        <button className="button" onClick={clearCells}>Clear Cells</button>
        <button className="button" onClick={fillRemainingCells}>Fill Remaining Cells</button>
        <select value={selectedCell} onChange={(e) => setSelectedCell(e.target.value)}>
          <option value="white">Eraser</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
          <option value="pink">Pink</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="brown">Brown</option>
          <option value="cyan">Cyan</option>
          <option value="magenta">Magenta</option>
          <option value="lime">Lime</option>
          <option value="teal">Teal</option>
          <option value="navy">Navy</option>
        </select>
      </div>

      <table className="grid">
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{ backgroundColor: cell || "white" }}
                  onClick={() => {
                    const newGrid = [...grid];
                    newGrid[rowIndex][cellIndex] = selectedCell;
                    setGrid(newGrid);
                  }}
                  onMouseDown={() => setIsDrawing(true)}
                  onMouseUp={() => setIsDrawing(false)}
                  onMouseOver={(event) => {
                    const target = event.target;
                    if (target.tagName === "TD" && isdrawing) {
                      const cellIndex = target.cellIndex;
                      const rowIndex = target.parentNode.rowIndex;
                      const newGrid = [...grid];
                      newGrid[rowIndex][cellIndex] = selectedCell;
                      setGrid(newGrid);
                    }
                  }}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
