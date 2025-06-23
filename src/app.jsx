import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Table from "./Table.jsx";

const App = () => {
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
        <button id="add-row">Add Row</button>
        <button id="delete-row" >Delete Row</button>
        <button id="add-column" >Add Column</button>
        <button id="delete-column" >Delete Column</button>
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