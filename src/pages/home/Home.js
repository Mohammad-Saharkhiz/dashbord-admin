import React from 'react'
import "./Home.css"
import Features from '../../components/features/Features'
import Chart from '../../components/chart/Chart'
import {xAxisData} from '../../data'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home(props) {
    

    return (
        <div className="home">
            <Features />
            <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale"  />
            <div className="home__widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>  
    )
}
