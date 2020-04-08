import React from "react";
import {  Dimensions, View } from "react-native";
import { PieChart, BarChart,LineChart,ContributionGraph } from "react-native-chart-kit";
//import { text} from 'react-native';



const data = {
  data : [

{ name: 'travel', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontSize: 15 },
{ name: 'Taxi', population: 2800000, color: '#F00', legendFontSize: 15 },
{ name: 'grocerie', population: 527612, color: 'red',  legendFontSize: 15 },
{ name: 'gym', population: 8538000, color: 'grey',  legendFontSize: 15 },
{ name: 'food', population: 11920000, color: 'rgb(0, 0, 255)',  legendFontSize: 15 }
]
}

export default class Pie extends React.Component {
 



  render(){
    const screenWidth = Dimensions.get("window").width;
      const height = 220;
     
    if(this.props.index === 0){
      return(<View>
         
<PieChart
      data={data}
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
      <text>Pie</text>
      
    </View>
  )
    }
    
  }
  }
