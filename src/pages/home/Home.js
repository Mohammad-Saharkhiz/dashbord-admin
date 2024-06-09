import React from 'react'
import "./Home.css"
import Features from '../../components/features/Features'
import Chart from '../../components/chart/Chart'
import data from '../../dataChart'

export default function Home(props) {
    

    return (
        <div className="home">
            <Features />
            <Chart grid title="Month Sale" data={data} dataKey="Sale"/>
        </div>
    )
}
