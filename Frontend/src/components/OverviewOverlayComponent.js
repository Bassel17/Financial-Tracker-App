import React from 'react';
import { Input,Button,Overlay} from 'react-native-elements';
import {View} from 'react-native';

export default class OverviewOverlayComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            overlayVisiblity:false,
            overlayInput:"",
        }
    }

    handleModal = ()=>{
        this.setState({
            expensesModalVisiblity: !this.state.overlayVisiblity
        });
    }

    handleInputChange = (text)=>{
        this.setState({
            overlayInput:text
        })
    }

    handleSave = () =>{
        this.props.onPressSave(this.state.overlayInput);
        this.setState({
            overlayInput:""
        });
    }

    handleDiscard = () => {
        this.props.onPressDiscard();
        this.setState({
            overlayInput:""
        })
    }

    render(){
        return(
            <Overlay 
                isVisible={this.props.visiblity}
                width="95%"
                height={150}
            >
                <View>
                <Input 
                    label="CATEGORY"
                    value={this.state.overlayInput}
                    onChangeText={this.handleInputChange}
                />
                <View style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    marginTop:10
                }}>
                    <Button
                        containerStyle={{
                            width:"45%",
                            margin:10
                        }}
                        title="SAVE"
                        onPress={this.handleSave}
                    />
                    <Button
                        containerStyle={{
                            width:"45%",
                            margin: 10
                        }}
                        title="DISCARD"
                        onPress={this.handleDiscard}
                    />
                </View>
                </View>
            </Overlay>
        )
    }

}