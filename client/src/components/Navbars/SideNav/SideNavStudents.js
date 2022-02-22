import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CreateIcon from '@mui/icons-material/Create';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sidenav-container">

            {/* <MenuIcon className="hamburger" /> */}
            <a href="/student" className="icon-block">
                <span className="icon-caption">Dashboard</span>
                <HomeIcon className="icon" />
            </a>
            <a href="/student/assignments" className="icon-block">
                <span className="icon-caption">Assignment</span>
                <AssignmentIcon className="icon" />
            </a>        
        </div>
    )
}

export default SideNav;
