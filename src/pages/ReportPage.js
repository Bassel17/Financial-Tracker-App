import React from 'react';
import {ButtonGroup } from 'react-native-elements';
import {View} from 'react-native';
import GraphComponent from '../components/GraphComponent';

export default class ReportPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedGraphIndex: 0,
    }
  }

  updateIndex = (selectedIndex) => {
    this.setState({selectedIndex})
  }

  updateGraphIndex = (selectedGraphIndex) => {
    this.setState({selectedGraphIndex})
  }
      
  render(){
    const buttons = ["EXPENSES","INCOME"];
    const Graphbuttons = ["Bargraph","Linechart"]; 
    const { selectedIndex,selectedGraphIndex } = this.state;
    return(
      <View style={{
          height:"100%",
          width:"100%",
          display:"flex",
          alignItems:"center",
          color:"black"
      }}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{width: "100%"}}
        />

        <ButtonGroup
          onPress={this.updateGraphIndex}
          selectedIndex={ selectedGraphIndex}
          buttons={ Graphbuttons}
          containerStyle={{width: "100%"}}
        />
        {selectedIndex === 0 ? 
        <GraphComponent index={selectedGraphIndex} data ="take this"/> :
        <GraphComponent index={selectedGraphIndex} data ="and this"/>}
            
      </View>
    );
  }
}