import React from 'react'
import "./Chart.css"
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts'

export default function Chart({title, data, dataKey, grid}) {
    

    return (
        <div className="chart">
            <h4 className="chart-title">{title}</h4>
            <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#ccc" strokeDasharray="10"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
