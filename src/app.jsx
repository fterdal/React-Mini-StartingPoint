import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Hello World</h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

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