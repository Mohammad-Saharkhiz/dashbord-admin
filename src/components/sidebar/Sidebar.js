import React from 'react'
import "./Sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';

export default function Sidebar(props) {
    

    return (
        <div className="side-bar">
            <div className="side-bar__wrapper">
                <div className="side-bar__menu">
                    <h3 className="side-bar__title">Dashboard</h3>
                    <div className="side-bar__list">
                        <li className="side-bar__list__item active">
                            <LineStyleIcon className="style-side-bar-icone"/>
                            Home
                        </li>
                        <li className="side-bar__list__item">
                            <TimelineIcon className="style-side-bar-icone"/>
                            Analytics
                        </li>
                        <li className="side-bar__list__item">
                            <TrendingUpIcon className="style-side-bar-icone"/>
                            Sales
                        </li>
                    </div>
                </div>
                <div className="side-bar__menu">
                    <h3 className="side-bar__title">Quick Menu</h3>
                    <div className="side-bar__list">
                        <li className="side-bar__list__item">
                            <PersonOutlineIcon className="style-side-bar-icone"/>
                            User
                        </li>
                        <li className="side-bar__list__item">
                            <PersonOutlineIcon className="style-side-bar-icone"/>
                            New User
                        </li>
                        <li className="side-bar__list__item">
                            <StorefrontIcon className="style-side-bar-icone"/>
                            Products
                        </li>
                        <li className="side-bar__list__item">
                            <AttachMoneyIcon className="style-side-bar-icone"/>
                            Transaction
                        </li>
                        <li className="side-bar__list__item">
                            <BarChartIcon className="style-side-bar-icone"/>
                            Reports
                        </li>   
                    </div>
                </div>
                <div className="side-bar__menu">
                    <h3 className="side-bar__title">Notifications</h3>
                    <div className="side-bar__list">
                        <li className="side-bar__list__item">
                            <MailOutlineIcon className="style-side-bar-icone"/>
                            Mail
                        </li>
                        <li className="side-bar__list__item">
                            <DynamicFeedIcon className="style-side-bar-icone"/>
                            Feedback
                        </li>
                        <li className="side-bar__list__item">
                            <ChatBubbleOutlineIcon className="style-side-bar-icone"/>
                            Messages
                        </li>
                    </div>
                </div>
                <div className="side-bar__menu">
                    <h3 className="side-bar__title">Staff</h3>
                    <div className="side-bar__list">
                        <li className="side-bar__list__item">
                            <HomeRepairServiceOutlinedIcon className="style-side-bar-icone"/>
                            Manage
                        </li>
                        <li className="side-bar__list__item">
                            <TimelineIcon className="style-side-bar-icone"/>
                            Analytics
                        </li>
                        <li className="side-bar__list__item">
                            <ReportGmailerrorredIcon className="style-side-bar-icone"/>
                            Reports
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}
