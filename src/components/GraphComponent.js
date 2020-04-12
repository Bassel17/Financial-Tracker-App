import React from "react";
import BarChartComponent from './BarChartComponent';
import LineChartComponent from './LineChartComponent';

export default function GraphComponent(props){
    if(props.index === 0){
        return <BarChartComponent/>
    }else{
        return <LineChartComponent/>
    }
}