import React from 'react';
import icon from 'react-native-vector-icons/FontAwesome';
import { styles,Button,Header, ButtonGroup } from 'react-native-elements';
import { View} from 'react-native';



export default class SwitchPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    updateIndex = (selectedIndex) => {
        this.setState({selectedIndex})
      }
   

    render(){
        const buttons = ["EXPENSES","INCOME"]
        const { selectedIndex } = this.state;
        return(
          
            <View style={{
                height:"100%",
                width:"100%",
                display:"flex",
                alignItems:"center",
                color:"black",
                paddingTop:"10%"
            }}>
              <Header
              
              statusBarProps={{ barStyle: 'dark-content' }}
               barStyle="dark-content" 
               leftComponent={{ icon: 'menu', color: 'black' }}
              
               centerComponent={{ text: 'MONTHLY', style: { color: 'black' } }}
               rightComponent={{ icon: 'home', color: 'black' }}
               containerStyle={{
                backgroundColor: 'grey',
                justifyContent: 'space-around',
                paddingTop:"10%"
              }}
              />

                <ButtonGroup 
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex }
                    buttons={buttons}
                    containerStyle={{width: "100%", color:"black" , backgroundColor:"grey"}}
   
                />
           






            </View>
        );
    }
}