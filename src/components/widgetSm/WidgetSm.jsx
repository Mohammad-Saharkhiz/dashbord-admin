import React from 'react'
import './WidgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from '../../data';

export default function WidgetSm(props) {
    

    return (
        <div className="widget-sm">
            <h5 className="widget-sm__title">New Join Members</h5>
            <ul className="widget-sm__list">
                {newMembers.map((member) => (
                <li className="widget-sm__list__item">
                    <img src={member.img} alt="image" className="image-new-user" />
                    <div className="details">
                        <span className="name-new-user">{member.userName}</span>
                        <span className="title-new-user">{member.title}</span>
                    </div>
                    <button className="widget-sm-button">
                        <VisibilityIcon className="widget-sm-icon"/>
                    </button>
                </li> 
                ))} 
            </ul>
        </div>
    )
}
