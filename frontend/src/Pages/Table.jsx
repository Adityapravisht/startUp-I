// Table.js
import React from "react";


const Table = ({ columns, data }) => {
  // function to decide row background color
  const getRowClass = (row) => {
    if (row.plan === "basic") return "row-basic";
    if (row.plan === "premium") return "row-premium";
    if (row.plan === "pro") return "row-pro";
    return "";
  };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={i}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="no-data">
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className={getRowClass(row)}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>
                    {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
