import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelineIcon from '@mui/icons-material/Timeline';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            Dashboard
          </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
            <LineStyleIcon/>
            Home
            </li>
            <li className="sidebarListItem">
            <TimelineIcon/>
            Analytics
            </li>
            <li className="sidebarListItem">
            <TrendingUpIcon/>
            Sales 
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar