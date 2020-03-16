import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Text, ButtonGroup } from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

export default class OverviewComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.index === 0){
            return <Text>AM EXPENSES</Text>
        }else{
            return <Text>AM INCOME</Text>
        }
    }
}