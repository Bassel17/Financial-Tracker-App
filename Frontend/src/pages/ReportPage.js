import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Text,Header ,ButtonGroup } from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

import BarChart from '../components/BarChart';
//import PieChart from '../components/PieChart';

export default class OverviewPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    updateIndex = (selectedIndex) => {
        this.setState({selectedIndex})
      }
      render(){
        const buttons = ["EXPENSES","INCOME"]
        const { selectedIndex } = this.state;
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
                     centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                     rightComponent={{ icon: 'home', color: '#fff' }}
                      />
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{width: "100%"}}
                />
               
               
               <BarChart index={this.state.selectedIndex}/>
               
                </View>
        );
    }
}