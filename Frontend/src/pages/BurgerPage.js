import React, { Component } from 'react';
import { Input,Button,Text } from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import { Avatar } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';




export default class BurgerPage extends React.Component{


  _onPressbutton() {
    alert(' Check your account statement , Categorize your expenses,Use a budgeting app,Explore other expense trackers, Identify room for change,Easily see where you stand,Know where your money is going,Chart your monthly progress,List These Monthly Expenses in Your Budget,List these monthly expenses,Now apply the 50/30/20 budget principles to your current spending,Balance of your expenses and income')

  }

  
  _onPressbut(){
    alert('Apple Card  , FreeWally ,Wallet ,MoneyStrands ,Money Lover ,Dollarbird,Honeyfi,Clarity Money ,Fudget,')
  }
  render(){
    return(
      <View >


<Avatar
 size={250}
  square
  icon={{name: 'user', type: 'font-awesome'}} 
  onPress={() => console.log("Works!")}
  activeOpacity={2}
  containerStyle={{ marginLeft: 55, marginTop: 30, blur:"dotted",borderStyle:"dashed",}}
/>

        
   <Text style={{textAlign:"center"}}>Username</Text>


<Button

  title="Overview"
  type="outline"
  buttonStyle={{
    paddingTop:"5%",
    paddingLeft:"3%",
    backgroundColor:"grey",
    borderColor:"white",
     width:"40%",
     alignSelf:"center"
   
  }}
/>



<Button
  title="Report"
  type="outline"
  buttonStyle={{
    paddingTop:"5%",
    paddingLeft:"8%",
    backgroundColor:"grey",
    borderColor:"white",
    width:"40%",
    alignSelf:"center"
  }}
/>


<Button type ="clear" title=" Currency"

buttonStyle={{
  paddingLeft:"8%",
 borderStyle:"dotted",
 paddingTop:"5%",
 backgroundColor:"grey",
 borderColor:"white",
 width:"40%",
 alignSelf:"center"

}}
/>
   
        <RNPickerSelect
        
                    onValueChange={(value) => console.log(value)}
                    items={[
                      
                      { label: 'LBP', value: 'LBP' },
                      { label: 'USD', value: 'USD' },
                      { label: 'EUR', value: 'EUR' },
                      { label: 'GBP', value: 'GBP' },
                      { label: 'JPY', value: 'JPY' },
                      { label: 'AED', value: 'AED' },
                      { label: 'AFN', value: 'AFN' },
                      { label: 'ALL', value: 'ALL' },
                      { label: 'AMD', value: 'AMD' },
                      { label: 'AOA', value: 'AOA' },
                      { label: 'ARS', value: 'ARS' },
                      { label: 'AUD', value: 'AUD' },
                    ]}
                />


<Button
  title="Goals"
  type="outline"
  buttonStyle={{
    paddingTop:"1%",
    paddingLeft:"8%",
    backgroundColor:"grey",
    borderColor:"white",
    width:"40%",
    alignSelf:"center"
   
  }}
/>

<Button
  
  title="Setting"
  type="outline"
  buttonStyle={{
    paddingTop:"3%",
    paddingLeft:"8%",
    width:"40%",
    backgroundColor:"grey",
    borderColor:"white",
    alignSelf:"center"
   
  }}
/>

<Button
  onPress={this._onPressbutton}
  title="Terms of use"
  type="outline"

  buttonStyle={{
    paddingTop:"4%",
    paddingLeft:"8%",
    backgroundColor:"grey",
    borderColor:"white",
    color:"white",
    width:"40%",
    alignSelf:"center"
   
  }}
/>

<Button
  onPress={this._onPressbut}
  title="Support"
  type="outline"
  buttonStyle={{
    paddingTop:"2%",
    paddingLeft:"8%",
    backgroundColor:"grey",
    borderColor:"white",
    width:"40%",
    alignSelf:"center"
   
  }}
/>




      </View>
    );
  }
}
