import { useMemo, useState } from "react";

const Table = ({
  columns,
  data,
  className = "",
  tableClass = "",
  headerClass = "",
  rowClass = "",
  cellClass = "",
  searchable = false,
  sortable = false,
  pagination = false,
  rowsPerPage = 10,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);

  // 🔍 Search
  const filteredData = useMemo(() => {
    let filtered = data;
    if (searchable && searchTerm) {
      filtered = data.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    return filtered;
  }, [data, searchTerm, searchable]);

  // ↕️ Sort
  const sortedData = useMemo(() => {
    if (!sortable || !sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig, sortable]);

  // 📑 Pagination
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;
    const start = (currentPage - 1) * rowsPerPage;
    return sortedData.slice(start, start + rowsPerPage);
  }, [sortedData, currentPage, rowsPerPage, pagination]);

  const totalPages = pagination
    ? Math.ceil(sortedData.length / rowsPerPage)
    : 1;

  const handleSort = (key) => {
    if (!sortable) return;
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className={`rt-wrapper ${className}`}>
      {/* 🔍 Search bar */}
      {searchable && (
        <input
          type="text"
          placeholder="Search..."
          className="rt-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}

      <table className={`rt-table ${tableClass}`}>
        <thead className={`rt-header ${headerClass}`}>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="rt-th"
                style={{width:col?.with }}
                onClick={() => handleSort(col.key)}
              >
                {col.label}
                {sortable && sortConfig.key === col.key && (
                  <span className="rt-sort">
                    {sortConfig.direction === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, i) => (
            <tr key={i} className={`rt-tr ${rowClass}`}>
              {columns.map((col) => (
                <td key={col.key} className={`rt-td ${cellClass}`}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* 📑 Pagination controls */}
      {pagination && (
        <div className="rt-pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
