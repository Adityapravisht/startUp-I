import React from 'react'
import Table from './Table';

export const Blog = () => {
 const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Plan", accessor: "plan" },
    {
      header: "Actions",
      accessor: "name",
      render: (value, row) => (
        <button onClick={() => alert(`Editing ${row.name}`)}>Edit</button>
      ),
    },
  ];

  const data = [
    { name: "Jyoti", email: "user1@gmail.com", plan: "basic" },
    { name: "Amit", email: "user2@gmail.com", plan: "premium" },
  ];

  return (
    <div>
      <h1>Reusable Table Example</h1>
      <Table columns={columns} data={data} />
    </div>
  );

}
