import UserDetail from "../components/layout/admin/UserDetail"
import Menu from '../components/atoms/Menu'

export const TechPartner = () => {
  return (
    <div>
      {/* <UsersTable/> */}
      
      <div className="subsDashboard">
      <Menu />
      <div className="contentArea" style={{color:'gray'}}>
        
        <UserDetail/>
      </div>
    </div>
    </div>
  )
}
