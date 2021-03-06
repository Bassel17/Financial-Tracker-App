import React from "react";
import {  Dimensions,View } from "react-native";
import { LineChart} from "react-native-chart-kit";

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


export default function LineChartComponent(props){
  const screenWidth = Dimensions.get("window").width;
  const height = 220;
  return(
    <View>
      <LineChart
        data={data}
        width={screenWidth}
        height={height}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
}
   


  

 
 