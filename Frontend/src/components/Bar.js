import {
  LineChart
} from "react-native-chart-kit";
import React,{ Component } from "react";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

class Bar extends Component{
render(){
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ],
    legend: ["Rainy Days", "Sunny Days", "Snowy Days"] // optional
  };
  return(
    <LineChart
  data={data}
  width={screenWidth}
  height={256}
  verticalLabelRotation={30}
  chartConfig={chartConfig}
  bezier
/>
    
  )
}
}
export default Bar;