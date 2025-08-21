import React from "react";
import Table from "./Table";
import { fakeUsers } from "../utils/fakerdata";
import MyImage from "../components/atoms/MyImage";
import MyButton from "../components/atoms/MyButton";

import { FaPlusSquare } from "react-icons/fa";
export const CategoryTable = () => {
  const columns = [
    {
      key: "img",
      label: "Image",
      //   width: "100px",
      render: (row) => (
        <MyImage src={row.img} alt={row.name} className="userImg" />
      ),
    },

    { key: "name", label: "Name" },
    { key: "language", label: "Language", width: "100px" },
     { key: "sku", label: "Sku ID", width: "100px" },
       {
      key: "actions",
      label: "Actions",
      width: "100px",
      render: () => <button className="actionBtn">⋮</button>,
    },
  ];

  return (
    <div className="users-container roboto-regular">
    <div className="subsHeader">
      <h3>All Categories</h3>
      <MyButton type="submit" className="subsBtn" name="Add  Category" icon={<FaPlusSquare />} />
    </div>
      <Table
        columns={columns}
        data={fakeUsers}
        searchable={true}
        sortable={true}
        pagination={true}
        rowsPerPage={5}
        className="custom-wrapper"
        tableClass="custom-table"
        rowClass="custom-row"
        cellClass="custom-cell"
      />
    </div>
  );
};
