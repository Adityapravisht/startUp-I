import { FaRegCalendarAlt, FaRegCalendarCheck } from "react-icons/fa";
import { CiRouter } from "react-icons/ci";
import Table from "./Table";
import { fakeUsers } from "../utils/fakerdata";
import MyImage from "../components/atoms/MyImage";
import MyButton from "../components/atoms/MyButton";
import { FaPlusSquare } from "react-icons/fa";

export const UsersTable = () => {
  console.log("99090: ", fakeUsers);
  const columns = [
    {
      key: "img",
      label: "Name",
      width: "100px",
      render: (row) => (
        <div className="userRow">
          <MyImage src={row.img} alt={row.name} className="userImg" />
          <span className="userName">{row.name}</span>
        </div>
      ),
    },
    { key: "email", label: "Email Id", width: "100px" },
    { key: "dateOfOrder", label: "Date of Order", width: "100px" },
    { key: "validTill", label: "Valid Till", width: "100px" },
    { key: "planType", label: "Subscription Type", width: "100px" },

    {
      key: "actions",
      label: "Actions",
      width: "100px",
      render: () => <button className="actionBtn">⋮</button>,
    },
  ];

  return (
    <div className="users-container roboto-regular">
      {/* Header Section */}
      <div className="header-section">
        <h3>Manage Subscriptions</h3>
        <p>Track and manage subscriptions and orders.</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon">
            <FaRegCalendarAlt />
          </div>
          <div>
            <h2>25</h2>
            <p>Today's Subscriptions</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <CiRouter />
          </div>
          <div>
            <h2>75</h2>
            <p>Live Subscriptions</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaRegCalendarCheck />
          </div>
          <div>
            <h2>775</h2>
            <p>Total Subscriptions</p>
          </div>
        </div>
      </div>

      <div className="subsHeader">
        <h3>All Subscription</h3>
        <MyButton
          type="submit"
          className="subsBtn"
          name="Add  Subscription"
          icon={<FaPlusSquare />}
        />
      </div>
      {/* Table with faker data */}
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
