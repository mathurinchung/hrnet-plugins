import React from 'react';

/**
 * This DataTableBody component is a React component that manages the body of a data table. 
 * It is responsible for rendering table data, including a message when no data is available.
 *
 * @component
 *
 * @param { Array } entries - The data entries to be displayed in the table body. Each entry should be an object where the keys correspond to the 'data' values of the columns array.
 * @param { Array } columns - The columns of the table, each column being an object containing the column's name and the column's data key in the entries objects.
 *
 * @returns { React.Element } The table body component.
 */
function DataTableBody({ entries, columns }) {
  return (
    <tbody>
      {
        (!entries || entries.length === 0)
        ? (
          <tr className="table-row empty">
            <td colSpan={ columns.length }>No data available in table</td>
          </tr>
        )
        : entries.map((entry, index) => (
          <tr key={ index } className="table-row">
            { columns.map((column, index) => <td key={ index }>{ entry[ column.data ] }</td>) }
          </tr>
        ))
      }
    </tbody>
  );
}

export default DataTableBody;
