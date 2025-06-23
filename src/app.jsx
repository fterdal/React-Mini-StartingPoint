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
    
const root = createRoot(document.getElementById("root"));
root.render(<App />);