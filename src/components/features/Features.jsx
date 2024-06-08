import React from 'react'
import "./Features.css"
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

export default function Features(props) {
    

    return (
        <div className="features">
            <div className="features-item">
                <span className="feature__title">Revanue</span>
                <div className="feature__container">
                    <span className="feature__money">$2,415</span>
                    <span className="feature__rate">
                        <span className="feature__rate__number">-11.4</span>
                        <ArrowDownwardOutlinedIcon className="arrow negative"/>
                    </span>
                </div>
                <p className="feature__sub">Compare to last month</p>
            </div>
            <div className="features-item">
                <span className="feature__title">Revanue</span>
                <div className="feature__container">
                    <span className="feature__money">$4,415</span>
                    <span className="feature__rate">
                        <span className="feature__rate__number">-1.4</span>
                        <ArrowDownwardOutlinedIcon className="arrow negative"/>
                    </span>
                </div>
                <p className="feature__sub">Compare to last month</p>
            </div>
            <div className="features-item">
                <span className="feature__title">Revanue</span>
                <div className="feature__container">
                    <span className="feature__money">$2,225</span>
                    <span className="feature__rate">
                        <span className="feature__rate__number">+2.4</span>
                        <ArrowUpwardOutlinedIcon className="arrow"/>
                    </span>
                </div>
                <p className="feature__sub">Compare to last month</p>
            </div>
        </div>
    )
}
