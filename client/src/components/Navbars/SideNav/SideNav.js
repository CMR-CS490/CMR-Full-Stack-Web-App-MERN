import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sidenav-container">

            <MenuIcon className="hamburger" />
            <a href="/homepage" className="icon-block">
                <span className="icon-caption">Dashboard</span>
                <HomeIcon className="icon" />
            </a>
            <a href="/create" className="icon-block">
                <span className="icon-caption">Create Test</span>
                <BookmarkIcon className="icon" />
            </a>
        </div>
    )
}

export default SideNav;
