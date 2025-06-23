import React, { use, useState, useEffect } from 'react'
import App from '../app'

const rows = () => {
    const [rows, setRow] = useState([]);

    function addRow() {
        setRow([...rows, <tr key={rows.length}><td></td><td></td><td></td></tr>])
    }
    const tableRows = rows.map((numberRows) => {
        return numberRows;
    })



    return (
        <>
            {tableRows}
        </>
    )
}

export default rows
