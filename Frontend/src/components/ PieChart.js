import React from "react";
import {View,Text} from 'react-native';

class PieChart extends React.Component {
  state = {
    dataPie: {
      labels: ["Income", "Expenses"],
      datasets: [
        {
          data: [300, 300],
          backgroundColor: ["#28a745", "#dc3545"],
          hoverBackgroundColor: ["#28a75b", "#dc3556"]
        }
      ]
    }
  };

  render() {
    if(this.props.index === 0){
    return (
      <View>
        <Text>fix this</Text>
      </View>
    );
  }
}
}

export default PieChart;
