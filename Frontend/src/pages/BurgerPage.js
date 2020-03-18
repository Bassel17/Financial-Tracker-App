import React, { Component } from 'react';
import { Input,Button,Text } from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import { Avatar } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';


export default class BurgerPage extends React.Component{
  render(){
    return(
      <View >


<Avatar square icon={{ name: 'person'  }}
AvatarStyle={{
 width:"100%"
}}
 />

        
        <Button
  title="Username"
  type="clear"
  buttonStyle={{
    paddingTop:"10%",
    marginRight:"75%",
   
  }}
/>


<Button
  title="Overview"
  type="clear"
  buttonStyle={{
    paddingTop:"10%",
    marginRight:"75%",
   
  }}
/>



<Button
  title="Report"
  type="clear"
  buttonStyle={{
    paddingTop:"10%",
    marginRight:"80%",
   
  }}
/>


<Button type ="clear" title=" Currency"

buttonStyle={{
 marginRight:"100%",
 borderStyle:"dotted",
 width:"25%",
 height:"100%"

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
  type="clear"
  buttonStyle={{
    paddingTop:"10%",
    marginRight:"75%",
   
  }}
/>

<Button
  title="Setting"
  type="clear"
  buttonStyle={{
    paddingTop:"10%",
    marginRight:"75%",
   
  }}
/>

<Button
  title="Terms of use"
  type="clear"
  buttonStyle={{
    paddingTop:"10%",
    marginRight:"75%",
   
  }}
/>

<Button
  title="Support"
  type="clear"
  buttonStyle={{
    paddingTop:"10%",
    marginRight:"75%",
   
  }}
/>




      </View>
    );
  }
}
