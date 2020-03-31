import React from "react";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import {View,Text} from 'react-native';
const screenWidth = Dimensions.get("window").width;

class ChartsPage extends React.Component {
  state = {
    dataBar: {
      labels: ["categories", "Groceries","Travel"],
      datasets: [
        {
          data: [20, 15,18]
        }
      ]
    }
  }
   

  render() {
    if(this.props.index === 0){
    return (
        <Text>Am expenses</Text>
    );
  }else{
    return (<Text>This is income data</Text>);
  }
}
}




export default ChartsPage;
