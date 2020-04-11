import React from 'react';
import { Input,Button,Overlay} from 'react-native-elements';
import {View} from 'react-native';

export default class OverviewCardEdit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editMode:false,
            categoryInput:""
        }
    }

    handleModal = ()=>{
        this.setState({
            expensesModalVisiblity: !this.state.overlayVisiblity
        });
    }

    handleInputChange = (text)=>{
        this.setState({
            categoryInput:text
        })
    }

    handleEdit = () => {
        this.setState({
            editMode:!this.state.editMode
        });
    }

    handleDelete = () =>{

    }

    handleDiscardEdit = () => {
        this.props.showEditDeleteCard();
        this.handleEdit();
        this.setState({
            categoryInput:""
        });
    }

    render(){
        if(this.state.editMode){
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
                            onPress={this.handleDiscardEdit}
                        />
                    </View>
                    </View>
                </Overlay>
            )
        }else{
            return(
                <Overlay 
                    isVisible={this.props.visiblity}
                    width="95%"
                    height={100}
                >
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
                            title="EDIT"
                            onPress={this.handleEdit}
                        />
                        <Button
                            containerStyle={{
                                width:"45%",
                                margin: 10,
                                backgroundColor:"red"
                            }}
                            title="DELETE"
                            onPress={this.handleDelete}
                        />
                    </View>
                </Overlay>
            )
        }
    }

}