import React, { Component } from 'react';
import { Input,Button,Text } from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import { Avatar } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';




export default class BurgerPage extends React.Component{


  _onPressbutton() {
    alert(' Check your account statement,(Pinpoint your money habits by taking inventory of all of your accounts including your checking account and all credit cards you have. Looking at your accounts will help you identify where you’re spending.) , Categorize your expenses,Use a budgeting app,Explore other expense trackers, Identify room for change,(As you track, be ready to make adjustments. It’s worth your time to keep tabs on your monthly expenses because of what you’ll uncover. “Tracking expenses can be very valuable for finding out what’s really costing you, and what is not as bad as you thought,” Serlin says.),Easily see where you stand,Know where your money is going,Chart your monthly progress,List These Monthly Expenses in Your Budget,List these monthly expenses,(Mortgage or rent,Utilities,Health insurance,Retirement-account contributions,Gym memberships,Fun stuff, like dining out),Now apply the budget principles to your current spending,Balance of your expenses and income,')

  }

  
  _onPressbut(){
    alert('Implementation(RN comes with Metro, a Javascript bundler with more or less Webpack-like features. It was written by facebook, and is optimized for large RN apps. Metro is not targeted towards the web, and documentation is sparse. So the alpha support in create-react-native-app uses webpack.The way web support works is by adding some babel-plugins, that replace all instances of import ... from react-native with import ... from react-native-web and do the same for expo .),(Note that this is alpha support, both react-native-web as well as expo-web are incomplete. Various components are not implemented (SectionList for example), and behaviour might be different. Images need their width/height specified for the web to be rendered.Still, I implemented a demo app. Source code is here. It’s for a slightly older version of the web support, but it’s very close.)')
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
<Avatar square icon={{ name: 'person'  }}
AvatarStyle={{
 width:100,
 height:100
}}
containerStyle={{
  width: 100,
  height:100
}}
 />

        
        <Button
  title="Username"
  type="clear"
  buttonStyle={{
    // paddingTop:"10%",
    // marginRight:"75%",
   
  }}
/>


<Button
    //onPress={() => console.log("Works!")}
  title="Overview"
  type="outline"
  buttonStyle={{
    
    paddingTop:"4%",
    paddingLeft:"3%",
    backgroundColor:"grey",
    borderColor:"white",
     width:"40%",
     height:"",
     alignSelf:"center",
    // paddingTop:"10%",
    // marginRight:"75%",
   
  }}
/>



<Button
 //onPress={() => console.log("Works!")}
  title="Report"
  type="outline"
  buttonStyle={{
    paddingTop:"5%",
    paddingLeft:"8%",
    backgroundColor:"grey",
    borderColor:"white",
    width:"40%",
    alignSelf:"center"
    // paddingTop:"10%",
    // marginRight:"80%",
   
  }}
/>


<Button type ="clear" title=" Currency"  onPress={() => console.log("Works!")}

buttonStyle={{
  paddingLeft:"8%",
 borderStyle:"dotted",
 paddingTop:"5%",
 backgroundColor:"grey",
 borderColor:"white",
 width:"40%",
 alignSelf:"center"
//  marginRight:"100%",
//  borderStyle:"dotted",
//  width:"25%",
//  height:"100%"

}}
/>
   <View  style = {{width:"40%", paddingleftt:"30%", alignSelf:"center",
   height:"5%",paddingHorizontal:10 ,
    paddingBottom:10 ,color:"white",
    backgroundColor:"grey"}}>
        <RNPickerSelect
        
                    onValueChange={(value) => console.log(works)}
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
                </View>


<Button
 //onPress={() => console.log("Works!")}
  title="Goals"
  type="outline"
  buttonStyle={{
    paddingTop:"1%",
    paddingLeft:"8%",
    backgroundColor:"grey",
    borderColor:"white",
    width:"40%",
    alignSelf:"center"
    // paddingTop:"10%",
    // marginRight:"75%",
   
  }}
/>

<Button
   //onPress={() => console.log("Works!")}
  title="Setting"
  type="outline"
  buttonStyle={{
    paddingTop:"3%",
    paddingLeft:"8%",
    width:"40%",
    backgroundColor:"grey",
    borderColor:"white",
    alignSelf:"center"
    // paddingTop:"10%",
    // marginRight:"75%",
   
  }}
/>

<Button
 //onPress={() => console.log("Works!")}
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
    // paddingTop:"10%",
    // marginRight:"75%",
   
  }}
/>

<Button
// onPress={() => console.log("Works!")}
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
    // paddingTop:"10%",
    // marginRight:"75%",
   
  }}
/>




      </View>
    );
  }
}
