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
  const [selectedCell, setSelectedCell] = React.useState("red");

  return (
    <div className="app">
      <h1 className="title">Hello World</h1>
      <h1>Grid</h1>
      <div className="buttons">
        <button onClick={addRow}>Add Row</button>
        <button onClick={deleteRow}>Delete Row</button>
        <button onClick={addColumn}>Add Column</button>
        <button onClick={deleteColumn}>Delete Column</button>
        <select value ={selectedCell} onChange={(e) => setSelectedCell(e.target.value)}>
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
              <td key={cellIndex}>
                <input
                  type="text"
                  value={cell}
                  onChange={(e) => {
                    const newGrid = [...grid];
                    newGrid[rowIndex][cellIndex] = e.target.value;
                    setGrid(newGrid);
                  }}
                />
              </td>
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
