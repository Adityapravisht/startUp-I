import Menu from "../components/atoms/Menu";

// import UserDetail from "../Components/Layout/admin/UserDetail";

// export const About = () => {
//   return (
//     <div style={{ display: "flex",width:'100%',position:'absolute' }}>

//       <div style={{width:'20%',height:'100vh'}}>
//         <Menu />
//       </div>

//       <div style={{ width: '80%',}}>
//         <UserDetail />
//       </div>

import { UsersTable } from "./UsersTable";

export const About = () => {
  return (
    <div className="subsDashboard">
      <Menu />
      <div className="contentArea">
        <UsersTable />
      </div>
    </div>
  );
};
