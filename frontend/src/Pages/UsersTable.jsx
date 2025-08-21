// import { Grid } from "gridjs-react";
// import { h } from "gridjs";
// import { FaRegCalendarAlt, FaRegCalendarCheck } from "react-icons/fa";
// import { CiRouter } from "react-icons/ci";

// const userData = [
//   { name: "Jyoti", email: "user1@gmail.com", plan: "basic" },
//   { name: "Amit", email: "user2@gmail.com", plan: "premium" },
//   { name: "Ravi", email: "user3@gmail.com", plan: "pro" },
// ];

// export const UsersTable = () => {
//   const today = new Date();
//   const formattedToday = today.toLocaleDateString();

//   const validTillDate = new Date();
//   validTillDate.setDate(today.getDate() + 30);
//   const formattedValidTill = validTillDate.toLocaleDateString();

//   return (
//     <div className="users-container roboto-regular">
//       {/* Header Section */}
//       <div className="header-section">
//         <h3>Manage Subscriptions</h3>
//         <p>Track and manage subscriptions and orders.</p>
//       </div>

//       {/* Stats Cards */}
//       <div className="stats-container">
//         <div className="stat-card">
//           <div className="stat-icon">
//             <FaRegCalendarAlt />
//           </div>
//           <div>
//             <h2>25</h2>
//             <p>Today's Subscriptions</p>
//           </div>
//         </div>

//         <div className="stat-card">
//           <div className="stat-icon">
//             <CiRouter />
//           </div>
//           <div>
//             <h2>75</h2>
//             <p>Live Subscriptions</p>
//           </div>
//         </div>

//         <div className="stat-card">
//           <div className="stat-icon">
//             <FaRegCalendarCheck />
//           </div>
//           <div>
//             <h2>775</h2>
//             <p>Total Subscriptions</p>
//           </div>
//         </div>
//       </div>
//       <div className="table-header">
//         <h4>All Subscriptions</h4>
//         {/* Grid search bar will sit here (right side) */}
//       </div>
//       {/* Table */}
//       <Grid
//         data={userData}
//         columns={[
//           { id: "name", name: "Name" },
//           { id: "email", name: "Email" },
//           { name: "Date of Order", formatter: () => formattedToday },
//           { name: "Valid Till", formatter: () => formattedValidTill },
//           {
//             id: "plan",
//             name: "Subscription Type",
//             formatter: (cell) =>
//               h(
//                 "span",
//                 {
//                   style: {
//                     padding: "4px 10px",
//                     borderRadius: "1rem",
//                     color: "white",
//                     backgroundColor:
//                       cell === "basic"
//                         ? "goldenrod"
//                         : cell === "premium"
//                         ? "royalblue"
//                         : "seagreen",
//                   },
//                 },
//                 cell
//               ),
//           },
//         ]}
//         search={true}
//         sort={true}
//       />
//     </div>
//   );
// };

import { Grid } from "gridjs-react";
import { h } from "gridjs";
import { FaRegCalendarAlt, FaRegCalendarCheck } from "react-icons/fa";
import { CiRouter } from "react-icons/ci";

const userData = [
  { name: "Jyoti", email: "user1@gmail.com", plan: "basic" },
  { name: "Amit", email: "user2@gmail.com", plan: "premium" },
  { name: "Ravi", email: "user3@gmail.com", plan: "pro" },
];

export const UsersTable = () => {
  const today = new Date();
  const formattedToday = today.toLocaleDateString();

  const validTillDate = new Date();
  validTillDate.setDate(today.getDate() + 30);
  const formattedValidTill = validTillDate.toLocaleDateString();

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

      <div className="table-header">
        <h4>All Subscriptions</h4>

      </div>

      {/* Table */}
      <Grid
        data={userData}
        columns={[
          { id: "name", name: "Name" },
          { id: "email", name: "Email" },
          { name: "Date of Order", formatter: () => formattedToday },
          { name: "Valid Till", formatter: () => formattedValidTill },
          {
            id: "plan",
            name: "Subscription Type",
            formatter: (cell) =>
              h(
                "span",
                {
                  style: {
                    padding: "4px 10px",
                    borderRadius: "1rem",
                    color: "white",
                    backgroundColor:
                      cell === "basic"
                        ? "goldenrod"
                        : cell === "premium"
                        ? "royalblue"
                        : "seagreen",
                  },
                },
                cell
              ),
          },
        ]}
        search={true}
        sort={true}
      />
    </div>
  );
};
