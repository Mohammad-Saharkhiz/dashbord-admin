import React from 'react'
import "./WidgetLg.css"
import { transActions } from '../../data'

export default function WidgetLg(props) {
    
    const Button = ({type}) => {
        return <button className={'widget-lg-button ' + type}>{type}</button>
    }

    return (
        <div className="widget-lg">
            <h4 className="widget-lg__title">Latest TransActions</h4>
            <table className="widget-lg__table">
                <tr className="widget-lg__tr">
                    <th className="widget-lg__th">Customer</th>
                    <th className="widget-lg__th">Date</th>
                    <th className="widget-lg__th">Amount</th>
                    <th className="widget-lg__th">Status</th>
                </tr>
                {transActions.map((user) => (    
                <tr className="widget-lg__tr">
                    <td className="widget-lg__user">
                        <img src={user.img} alt="img" className="widget-lg__user-image"/>
                        <span className="widget-lg__user-name">{user.customer}</span>
                    </td>
                    <td className="widget-lg__date">{user.date}</td>
                    <td className="widget-lg__amount">{user.amount}</td>
                    <td className="widget-lg__status">
                        <Button type={user.stauts}/>    
                    </td>
                </tr>
                ))}
            </table>
        </div>
    )
}
