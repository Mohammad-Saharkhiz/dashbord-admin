import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar(props) {
    

    return (
        <div className="top-bar">
            <div className="top-bar__wrapper">
                <div className="top-bar__left">
                    <h2 className="logo-name">Hamster</h2>
                    <span className="logo-emoji">❤</span>
                </div>
                <div className="top-bar__right">
                    <div className="wrapper__icon">
                        <NotificationsIcon />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="wrapper__icon">
                        <LanguageIcon />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="wrapper__icon">
                        <SettingsIcon />
                    </div>

                    <img className="image-person" src="./logo192.png" alt="image" />
                </div>
            </div>
        </div>
    )
}
