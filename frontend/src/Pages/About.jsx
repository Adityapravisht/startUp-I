import Menu from "../components/atoms/Menu";

import { UsersTable } from "./UsersTable";

export const About = () => {
  return (
    <div className="subsDashboard" style={{}}>
      <Menu />
      <div className="contentArea" >
        <UsersTable />
      </div>
    </div>
  );
};
