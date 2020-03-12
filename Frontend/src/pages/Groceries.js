import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Input,Button,Text } from 'react-native-elements';


export default class Groceries extends React.Component{



  handletitleChange = (event) => {
    this.setState({
      usertitle:event.target.value
    });
  }

  render(){
    return(
    <view style = {{color:"red",width:"50%"}}>

  
    <textarea>hello</textarea>
    </view>
    );
  }
}