import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Text, ButtonGroup } from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import OverviewComponent from '../components/OverviewComponent';

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
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{width: "100%"}}
                />
                <OverviewComponent index={this.state.selectedIndex}/>
            </View>
        );
    }
}