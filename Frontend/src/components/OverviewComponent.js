import React from 'react';
import { Input,Button,Text,Card,Overlay, ThemeConsumer } from 'react-native-elements';
import {View} from 'react-native';
import OverviewCardComponent from './OverviewCardComponent';
import OverviewOverlayComponent from './OverviewOverlayComponent';
import OverviewCardEdit from './OverviewCardEdit';

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
            editExpensesCardVisiblity:false,
            editIncomeCardVisiblity:false
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

    handleSavingExpenseCategory = (category) =>{
        this.setState({
            expensesCards:[...this.state.expensesCards,{
                category:category,
                amount:0
            }]
        },()=>this.handleExpensesModal());
    }

    handleSavingIncomeCategory = (category) =>{
        this.setState({
            incomeCards:[...this.state.incomeCards,{
                category:category,
                amount:0
            }]
        },()=>this.handleIncomeModal());
    }

    handleEditExpensesCardVisiblity = ()=>{
        this.setState({
            editExpensesCardVisiblity:!this.state.editExpensesCardVisiblity
        });
    }

    handleEditIncomeCardVisiblity = ()=>{
        this.setState({
            editIncomeCardVisiblity:!this.state.editIncomeCardVisiblity
        });
    }

    render(){
        if(this.props.index === 0){
            return (
                <View>
                {this.state.expensesCards.map((card,index)=>
                    <OverviewCardComponent category = {card.category} amount = {card.amount} key={index} showEditDeleteCard={this.handleEditExpensesCardVisiblity}/>  
                )}
                <Button
                    title="+"
                    containerStyle={{marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}}
                    buttonStyle={{
                        width:"30%",
                        borderRadius:100
                    }}
                    onPress={this.handleExpensesModal}
                />

                <OverviewOverlayComponent visiblity = {this.state.expensesModalVisiblity} onPressSave = {this.handleSavingExpenseCategory} onPressDiscard = {this.handleExpensesModal}/>
                <OverviewCardEdit visiblity={this.state.editExpensesCardVisiblity} showEditDeleteCard={this.handleEditExpensesCardVisiblity}/>
                </View>
            );
        }else{
            return(
            <View>
                {this.state.incomeCards.map((card,index)=>
                    <OverviewCardComponent category = {card.category} amount = {card.amount} key={index} showEditDeleteCard={this.handleEditIncomeCardVisiblity}/>                    
                )}

            <Button
                title="+"
                containerStyle={{marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}}
                buttonStyle={{
                    width:"30%",
                    borderRadius:100
                }}
                onPress={this.handleIncomeModal}
            />
                
                <OverviewOverlayComponent visiblity = {this.state.incomeModalVisiblity} onPressSave = {this.handleSavingIncomeCategory} onPressDiscard={this.handleIncomeModal}/>
                <OverviewCardEdit visiblity={this.state.editIncomeCardVisiblity} showEditDeleteCard={this.handleEditIncomeCardVisiblity}/>
            </View>
            )
        }
    }
}