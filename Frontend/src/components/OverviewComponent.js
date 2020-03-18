import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Text,Card,Overlay, ThemeConsumer } from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

export default class OverviewComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            expensesCards:[
                {
                    category:"Groceries",
                    amount:125
                },
                {
                    category:"Transport",
                    amount:500
                }
            ],
            incomeCards:[
                {
                    category:"Salary",
                    amount:1500
                }
            ],
            expensesModalVisiblity:false,
            incomeModalVisiblity:false,
            expensesOverlayInput:"",
            incomeOverlayInput:""
        }
    }

    handleExpensesModal = ()=>{
        this.setState({
            expensesModalVisiblity: !this.state.expensesModalVisiblity
        });
    }

    handleIncomeModal = ()=>{
        this.setState({
            incomeModalVisiblity: !this.state.incomeModalVisiblity
        });
    }

    handleExpensesOverlayInputChange = (text)=>{
        this.setState({
            expensesOverlayInput:text
        })
    }

    handleIncomeOverlayInputChange = (text)=>{
        this.setState({
            incomeOverlayInput:text
        });
    }

    handleSavingExpenseCategory = () =>{
        this.setState({
            expensesCards:[...this.state.expensesCards,{
                category:this.state.expensesOverlayInput,
                amount:0
            }]
        },()=>this.handleExpensesModal());
    }

    handleSavingIncomeSource = () =>{
        this.setState({
            incomeCards:[...this.state.incomeCards,{
                category:this.state.incomeOverlayInput,
                amount:0
            }]
        },()=>this.handleIncomeModal());
    }

    render(){
        if(this.props.index === 0){
            return (
                <View>
                {
                this.state.expensesCards.map((card,index)=>{
                    return(
                        <Card containerStyle={{
                            width:"95%"
                        }} key={index}>
                            <View style={{
                                display:"flex",
                                flexDirection:"row",
                                alignItems:"center",
                            }}>
                                <Text style={{width:"50%",fontSize:28}}>{card.category}</Text>
                                <View style={{width:"50%",display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
                                    <Text style={{fontSize:28}}>{card.amount} $</Text>
                                </View>
                            </View>
                        </Card>
                    )
                    
                })
                }
                <Button
                    title="+"
                    containerStyle={{marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}}
                    buttonStyle={{
                        width:"30%",
                        borderRadius:100
                    }}
                    onPress={this.handleExpensesModal}
                />

                <Overlay 
                    isVisible={this.state.expensesModalVisiblity}
                    width="95%"
                    height={150}
                >
                    <Input 
                        label="CATEGORY"
                        value={this.state.expensesOverlayInput}
                        onChangeText={this.handleExpensesOverlayInputChange}
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
                            onPress={this.handleSavingExpenseCategory}
                        />
                        <Button
                            containerStyle={{
                                width:"45%",
                                margin: 10
                            }}
                            title="DISCARD"
                            onPress={this.handleExpensesModal}
                        />
                    </View>
                </Overlay>
                </View>
            );
        }else{
            return(
                <View>
                {
                this.state.incomeCards.map((card,index)=>{
                    return(
                        <Card containerStyle={{
                            width:"95%"
                        }} key={index}>
                            <View style={{
                                display:"flex",
                                flexDirection:"row",
                                alignItems:"center",
                            }}>
                                <Text style={{width:"50%",fontSize:28}}>{card.category}</Text>
                                <View style={{width:"50%",display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
                                    <Text style={{fontSize:28}}>{card.amount} $</Text>
                                </View>
                            </View>
                        </Card>
                    )
                    
                })
            }
            <Button
                title="+"
                containerStyle={{marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}}
                buttonStyle={{
                    width:"30%",
                    borderRadius:100
                }}
                onPress={this.handleIncomeModal}
            />

                <Overlay 
                    isVisible={this.state.incomeModalVisiblity}
                    width="95%"
                    height={150}
                >
                    <Input 
                        label="SOURCE"
                        value={this.state.incomeOverlayInput}
                        onChangeText={this.handleIncomeOverlayInputChange}
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
                            onPress={this.handleSavingIncomeSource}
                        />
                        <Button
                            containerStyle={{
                                width:"45%",
                                margin: 10
                            }}
                            title="DISCARD"
                            onPress={this.handleIncomeModal}
                        />
                    </View>
                </Overlay>
            </View>
            )
        }
    }
}