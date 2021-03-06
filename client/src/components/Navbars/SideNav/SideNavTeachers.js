import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CreateIcon from '@mui/icons-material/Create';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sidenav-container">

            {/* <MenuIcon className="hamburger" /> */}
            <a href="/teacher" className="icon-block">
                <span className="icon-caption">Dashboard</span>
                <HomeIcon className="icon" />
            </a>
            <a href="/teacher/createtests" className="icon-block">
                <span className="icon-caption">Assignment</span>
                <AssignmentIcon className="icon" />
            </a>
            <a href="/teacher/createquestions" className="icon-block">
                <span className="icon-caption">CreateQs</span>
                <CreateIcon className="icon" />
            </a>

            <a href="/teacher/questions" className="icon-block">
                <span className="icon-caption">Questions</span>
                <QuestionMarkIcon className="icon" />
            </a>
            
        </div>
    )
}

export default SideNav;
