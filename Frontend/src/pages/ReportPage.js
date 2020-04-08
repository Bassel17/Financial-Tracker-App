import React from 'react';
import { Header ,ButtonGroup } from 'react-native-elements';
import {View} from 'react-native';
import { Button } from 'react-native';

import Bar from '../components/Bar';
import Pie from '../components/Pie';
import LineChartComponent from '../components/LineChart';
//import { PieChart } from 'react-native-chart-kit';
import PieChart from '../components/PieChart';
//import { LineChart } from 'react-native-chart-kit';

export default class ReportPage extends React.Component {
    

  onPressLearnMore(){
    alert('400$')
  }
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0,
            selectedGraphIndex: 0,
            selectedPieIndex:0,
        }
    }

    updateIndex = (selectedIndex) => {
        this.setState({selectedIndex})
      }
      updateGraphIndex = (selectedGraphIndex) => {
          this.setState({selectedGraphIndex})
      }
      updatePieIndex = (selectedPieIndex) => {
        this.setState({selectedPieIndex})
    }
      
      render(){
        const buttons = ["EXPENSES","INCOME"]
        const Graphbuttons = ["BarChart","LineChart"]
        const Piebuttons = ["PieChart","Pie"]
        

        
        const { selectedIndex,selectedGraphIndex,selectedPieIndex } = this.state;
        return(
            <View style={{
                height:"100%",
                width:"100%",
                display:"flex",
                alignItems:"center",
                color:"black"
            }}>
              <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                     centerComponent={{ text: 'Report', style: { color: '#fff' } }}
                     rightComponent={{ icon: 'home', color: '#fff' }}
                      />
       
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{width: "100%"}}
                />
                 

         <Button
         onPress={this.onPressLearnMore}
         title="Balance"
         color="grey"
         buttonStyle={{
           width:"100%" 
          
         }}
         containerStyle={{
           width:"100%",
         }}
        
        />
        

           <ButtonGroup
                    onPress={this.updateGraphIndex}
                    selectedIndex={ selectedGraphIndex}
                    buttons={ Graphbuttons}
                    containerStyle={{width: "100%"}}
                />
                <ButtonGroup
                    onPress={this.updatePieIndex}
                    selectedIndex={ selectedPieIndex}
                    buttons={ Piebuttons}
                    containerStyle={{width: "100%"}}
                />
                
                
       


                {selectedGraphIndex === 0 ? <Bar index={this.state.selectedIndex}/> : <LineChartComponent index={this.state.selectedIndex}/>}  
                 {selectedPieIndex ===0 ? <Pie index={this.state.selectedIndex}/> : <PieChart index={this .state.selectedIndex}/>}
                </View>
        );
    }
}