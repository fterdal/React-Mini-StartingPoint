import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import rows from "./components/rows";


const App = (props) => {
  return (
    <div className="app">
      <h1>Grid Maker</h1>
      <table>
        <tbody>
          {props.rows}
        </tbody>
      </table>
      <div>
        <button onClick={props.addRow} id="add-row">Add Row</button>
        <button id="delete-row">Delete Row</button>
        <button id="add-column">Add Column</button>
        <button id="delete-column">Delete Column</button>
        <select id="color-select">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
        <button id="fill-uncolored">Fill Uncolored</button>
        <button id="fill-grid">Fill Grid</button>
        <button id="clear-grid">Clear Grid</button>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
