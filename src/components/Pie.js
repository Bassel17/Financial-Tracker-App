import React from "react";
import {  Dimensions, Style, View } from "react-native";
import { PieChart, BarChart,LineChart,ContributionGraph } from "react-native-chart-kit";
import { Button } from 'react-native';
 const data = {
  data : [

{ name: 'travel', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontSize: 15 },
{ name: 'Taxi', population: 2800000, color: '#F00', legendFontSize: 15 },
{ name: 'grocerie', population: 527612, color: 'red',  legendFontSize: 15 },
{ name: 'gym', population: 8538000, color: 'grey',  legendFontSize: 15 },
{ name: 'food', population: 11920000, color: 'rgb(0, 0, 255)',  legendFontSize: 15 }
],
commitsData : [
 { date: '2017-01-02', count: 1 },
 { date: '2017-01-03', count: 2 },
 { date: '2017-01-04', count: 3 },
 { date: '2017-01-05', count: 4 },
 { date: '2017-01-06', count: 5 },
 { date: '2017-01-30', count: 2 },
 { date: '2017-01-31', count: 3 },
 { date: '2017-03-01', count: 2 },
 { date: '2017-04-02', count: 4 },
 { date: '2017-03-05', count: 2 },
 { date: '2017-02-30', count: 4 }
]
}
const chartConfig = {
  backgroundColor: "blue",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
    backgroundColor:"gray",
    paddingTop:30
   
  },
  propsForDots: {
    r: "6",
    strokeWidth: 2,
    stroke: "#ffb726"
  }
};

export default class Pie extends React.Component {
 



render(){
  const screenWidth = Dimensions.get("window").width;
    const height = 220;
   
  if(this.props.index === 0){
    return(<View>






      <PieChart
      data={data.data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor="population"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
  />
  </View>
    );
  } else{
return(
  <View>
    {/*  <ContributionGraph
 values={data.commitsData}
  endDate={new Date('2017-04-01')}
  numDays={105}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
/> */}
  </View>
)
  }
  
}
}

