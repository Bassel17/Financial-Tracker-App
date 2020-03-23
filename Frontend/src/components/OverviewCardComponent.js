import React from 'react';
import {Text,Card} from 'react-native-elements';
import {View,TouchableOpacity} from 'react-native';

export default class OverviewCardComponent extends React.Component{
    constructor(props){
        super(props);
    }

    showEditOverlay = ()=>{
        this.props.showEditDeleteCard();
    }

    render(){
        return(
            <TouchableOpacity underlayColor="white" style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"center"
            }}
            onLongPress={this.showEditOverlay}
            >
                <Card containerStyle={{
                width:"95%"
            }} key={this.props.key}
            >
                <View style={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                }}>
                    <Text style={{width:"50%",fontSize:28}}>{this.props.category}</Text>
                    <View style={{width:"50%",display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
                        <Text style={{fontSize:28}}>{this.props.amount} $</Text>
                    </View>
                </View>
            </Card>
            </TouchableOpacity>
        )
    }

}