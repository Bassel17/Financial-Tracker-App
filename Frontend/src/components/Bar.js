import React from "react";
import { ScrollView, StatusBar, Dimensions, Text, View } from "react-native";
import { PieChart, BarChart } from "react-native-chart-kit";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};

const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726"
  }
};
export default class Bar extends React.Component {
  render() {
    const screenWidth = Dimensions.get("window").width;
    const height = 220;

    return (
      <View>
        <BarChart
          data={data}
          width={screenWidth}
          height={height}
          chartConfig={chartConfig}
        />
      </View>
    );
  }
}