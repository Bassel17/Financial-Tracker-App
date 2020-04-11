import React from "react";
import {  Dimensions, Text, View } from "react-native";
import {  BarChart,LineChart,ContributionGraph } from "react-native-chart-kit";



let data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ],
};

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


export default class LineChartComponent extends React.Component {
  render() {
    const screenWidth = Dimensions.get("window").width;
    const height = 220;
   
  if(this.props.index === 0){
      return(
<View>
<Text>BarChart</Text>
<LineChart
     data={data}
     width={screenWidth}
     height={220}
     chartConfig={chartConfig}
     bezier
     
   />
</View>
      )
    }else{
      return(
        <View>
          <Text>BarChart</Text>
        </View>
      )
    }
    }
  }
   


  

 
 